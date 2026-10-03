/* One Skill Drill engine v1 - vanilla JS, no dependencies.
   A drill page loads this file plus a data file that sets window.DRILL.
   Data shape: see README.md in the repo root. */
(function () {
  "use strict";
  var D = window.DRILL;
  var root = document.getElementById("drill");
  if (!D || !root) { if (root) root.textContent = "Drill data missing."; return; }

  var KEYS = ["A", "B", "C", "D", "E", "F"];
  var state = { i: 0, score: 0, answers: [], order: [] };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Safe mini-markup: escape everything, then allow **bold** and `code`.
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function srcRefs(ids) {
    if (!ids || !ids.length || !D.sources) return "";
    return ids.map(function (n) {
      var s = D.sources[n - 1];
      return s ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">[' + n + "] " + esc(s.short || s.title) + "</a>" : "";
    }).join(" · ");
  }

  /* ---------- visuals ---------- */
  var V = {};
  V.sheet = function (v) {
    var w = el("div", "sheet");
    if (v.formula) {
      w.appendChild(el("div", "fx", '<span class="ref">' + esc(v.formulaRef || "") + "</span><em>fx</em><span>" + esc(v.formula) + "</span>"));
    }
    var sc = el("div", "scroll");
    var t = el("table");
    var ncol = (v.header || (v.rows && v.rows[0]) || []).length;
    var th = "<thead><tr><th></th>";
    for (var c = 0; c < ncol; c++) th += "<th>" + String.fromCharCode(65 + c + (v.startCol || 0)) + "</th>";
    th += "</tr></thead>";
    var body = "<tbody>";
    var rows = (v.header ? [v.header] : []).concat(v.rows || []);
    var marks = v.marks || {};
    rows.forEach(function (r, ri) {
      var isH = v.header && ri === 0;
      body += '<tr class="' + (isH ? "hdr" : "") + '"><td class="rn">' + (ri + 1) + "</td>";
      r.forEach(function (cell, ci) {
        var cls = [];
        var m = marks[ri + "," + ci] || (v.colMark && v.colMark.col === ci ? v.colMark.cls : "");
        if (m) cls.push(m);
        if (!isH && typeof cell === "string" && /^[-$]?[\d,.]+%?$/.test(cell.trim())) cls.push("num");
        if (cell === "?") cls.push("q");
        body += '<td class="' + cls.join(" ") + '">' + esc(cell) + "</td>";
      });
      body += "</tr>";
    });
    body += "</tbody>";
    t.innerHTML = th + body;
    t.setAttribute("aria-label", v.alt || "Example worksheet");
    sc.appendChild(t);
    w.appendChild(sc);
    if (v.caption) w.appendChild(el("div", "cap", md(v.caption)));
    if (v.tabs) {
      var tabs = el("div", "tabs");
      v.tabs.forEach(function (n, k) { tabs.appendChild(el("span", k === (v.activeTab || 0) ? "on" : "", esc(n))); });
      w.appendChild(tabs);
    }
    return w;
  };
  V.pane = function (v) {
    var w = el("div", "pane");
    w.appendChild(el("div", "ph", esc(v.title || "Assistant pane") + (v.subtitle ? "<small>" + esc(v.subtitle) + "</small>" : "")));
    if (v.modes) {
      var m = el("div", "modes");
      v.modes.forEach(function (x) { m.appendChild(el("span", x === v.activeMode ? "on" : "", esc(x))); });
      w.appendChild(m);
    }
    if (v.messages && v.messages.length) {
      var ms = el("div", "msgs");
      v.messages.forEach(function (x) { ms.appendChild(el("div", "msg " + (x.who === "you" ? "you" : "reply"), md(x.text))); });
      w.appendChild(ms);
    }
    w.appendChild(el("div", "box", "<span>" + esc(v.placeholder || "Ask a question or describe a task…") + "</span><b>➤</b>"));
    return w;
  };
  V.checklist = function (v) {
    var w = el("div", "clip");
    w.appendChild(el("div", "ch", esc(v.title || "Checklist") + (v.subtitle ? "<small>" + esc(v.subtitle) + "</small>" : "")));
    var ul = el("ul");
    (v.items || []).forEach(function (it) {
      var li = el("li", it.hl ? "hl" : "", "<span>" + md(it.label) + "</span>" + (it.status ? '<span class="st ' + esc(it.status) + '">' + esc(it.value || it.status) + "</span>" : ""));
      ul.appendChild(li);
    });
    w.appendChild(ul);
    if (v.footer) w.appendChild(el("div", "cf", md(v.footer)));
    return w;
  };
  function renderVisuals(list) {
    var box = el("div", "vis");
    (Array.isArray(list) ? list : list ? [list] : []).forEach(function (v) {
      if (V[v.type]) box.appendChild(V[v.type](v));
    });
    return box;
  }

  /* ---------- screens ---------- */
  function shell() {
    root.innerHTML = "";
    var c = el("div", "card");
    root.appendChild(c);
    return c;
  }

  function intro() {
    var c = shell();
    c.appendChild(el("p", "label", esc(D.kicker || D.brand || "One Skill Drill")));
    c.appendChild(el("h1", "", esc(D.title)));
    c.appendChild(el("p", "lede", md(D.intro || "")));
    var meta = el("ul", "meta");
    (D.meta || [D.questions.length + " questions", "Instant feedback", "Score at the end"]).forEach(function (m) { meta.appendChild(el("li", "", esc(m))); });
    c.appendChild(meta);
    if (D.disclaimer) c.appendChild(disclaimerBlock());
    var b = el("button", "btn", "Start the drill");
    b.type = "button";
    b.addEventListener("click", start);
    c.appendChild(b);
    c.appendChild(sourcesBlock());
    b.focus({ preventScroll: true });
  }

  function start() {
    state = { i: 0, score: 0, answers: [], order: [] };
    question();
  }

  function question() {
    var q = D.questions[state.i];
    var c = shell();
    var n = D.questions.length;
    var pr = el("div", "progress", '<span>Question ' + (state.i + 1) + " of " + n + '</span><span class="bar"><i></i></span><span>Score ' + state.score + "</span>");
    c.appendChild(pr);
    requestAnimationFrame(function () { pr.querySelector("i").style.width = (state.i / n) * 100 + "%"; });
    if (q.label) c.appendChild(el("p", "label", esc(q.label)));
    if (q.scenario) c.appendChild(el("p", "scenario", md(q.scenario)));
    if (q.visual) c.appendChild(renderVisuals(q.visual));
    var ask = el("p", "ask", md(q.ask));
    ask.id = "ask-" + state.i;
    c.appendChild(ask);

    var opts = el("div", "opts");
    opts.setAttribute("role", "group");
    opts.setAttribute("aria-labelledby", ask.id);
    var order = D.shuffle === false ? q.options.map(function (_, k) { return k; }) : shuffle(q.options.map(function (_, k) { return k; }));
    var btns = [];
    order.forEach(function (oi, pos) {
      var o = q.options[oi];
      var b = el("button", "opt" + (q.optionStyle === "prompt" ? " prompt" : ""), '<span class="k">' + KEYS[pos] + '</span><span class="t">' + md(o.text) + "</span>");
      b.type = "button";
      b.dataset.correct = o.correct ? "1" : "0";
      b.addEventListener("click", function () { choose(oi, b); });
      btns.push(b);
      opts.appendChild(b);
    });
    c.appendChild(opts);

    var fb = el("div", "fb");
    fb.setAttribute("aria-live", "polite");
    c.appendChild(fb);

    function choose(oi, btn) {
      if (state.answers[state.i] != null) return;
      var o = q.options[oi];
      state.answers[state.i] = { picked: oi, correct: !!o.correct };
      if (o.correct) state.score++;
      btns.forEach(function (b) {
        b.disabled = true;
        if (b.dataset.correct === "1") b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      var right = q.options.filter(function (x) { return x.correct; })[0];
      fb.className = "fb show " + (o.correct ? "good" : "bad");
      fb.innerHTML = "<b>" + (o.correct ? "✓ Correct." : "✗ Not quite. Best answer: " + md(right.text)) + "</b>" +
        md(o.note && !o.correct ? o.note + " " + q.why : q.why) +
        (q.sources ? '<span class="src">Source: ' + srcRefs(q.sources) + "</span>" : "");
      pr.lastChild.textContent = "Score " + state.score;
      var nb = el("button", "btn", state.i + 1 < n ? "Next question" : "See my score");
      nb.type = "button";
      nb.style.marginTop = "12px";
      nb.addEventListener("click", function () {
        state.i++;
        if (state.i < n) question(); else results();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      c.appendChild(nb);
      nb.focus({ preventScroll: true });
      fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    c.addEventListener("keydown", function (e) {
      var k = KEYS.indexOf(String(e.key).toUpperCase());
      if (k < 0) k = parseInt(e.key, 10) - 1;
      if (k >= 0 && k < btns.length && !btns[k].disabled) btns[k].click();
    });
    if (btns[0]) btns[0].focus({ preventScroll: true });
  }

  function results() {
    var c = shell();
    var n = D.questions.length;
    var pct = Math.round((state.score / n) * 100);
    var band = (D.bands || []).filter(function (b) { return state.score >= b.min; }).sort(function (a, b) { return b.min - a.min; })[0];
    c.appendChild(el("p", "label", esc(D.kicker || D.brand || "One Skill Drill")));
    c.appendChild(el("h2", "", "Your score"));
    var s = el("div", "score", '<div class="ring" style="--p:' + pct + '"><b>' + state.score + "/" + n + "</b></div><div><b>" + esc(band ? band.title : pct + "%") + "</b><br><span class=\"lede\">" + md(band ? band.text : "") + "</span></div>");
    c.appendChild(s);

    var missed = D.questions.filter(function (q, k) { return !(state.answers[k] && state.answers[k].correct); });
    c.appendChild(el("p", "ask", missed.length ? "What to practice" : "You nailed it. Keep these sharp:"));
    var ul = el("ul", "recap");
    (missed.length ? missed : D.questions).forEach(function (q) { ul.appendChild(el("li", "", md(q.practice))); });
    if (missed.length && missed.length < n) {
      D.questions.forEach(function (q, k) {
        if (state.answers[k] && state.answers[k].correct) ul.appendChild(el("li", "ok", "✓ " + md(q.practice)));
      });
    }
    c.appendChild(ul);
    if (D.takeaway) c.appendChild(el("p", "lede", md(D.takeaway)));

    var row = el("div", "btn-row");
    var again = el("button", "btn", "Try again");
    again.type = "button";
    again.addEventListener("click", start);
    row.appendChild(again);
    if (D.moreUrl) {
      var more = el("a", "btn ghost", esc(D.moreLabel || "More drills"));
      more.href = D.moreUrl;
      more.style.textAlign = "center";
      more.style.textDecoration = "none";
      more.style.display = "block";
      row.appendChild(more);
    }
    c.appendChild(row);
    if (D.disclaimer) c.appendChild(disclaimerBlock());
    c.appendChild(sourcesBlock());
    if (D.cta) c.appendChild(ctaBlock());
    try { localStorage.setItem("osd:" + D.id + ":last", state.score + "/" + n); } catch (e) {}
    document.dispatchEvent(new CustomEvent("drill:done", { detail: { score: state.score, total: n } }));
    again.focus({ preventScroll: true });
  }

  function disclaimerBlock() {
    var w = el("p", "disclaimer", md(D.disclaimer));
    w.setAttribute("role", "note");
    return w;
  }

  function ctaBlock() {
    var x = D.cta;
    var w = el("div", "cta");
    w.id = "drill-cta";
    w.appendChild(el("h3", "", esc(x.title || "Get this customized for your SOP")));
    if (x.text) w.appendChild(el("p", "", md(x.text)));
    if (x.url) {
      var a = el("a", "btn", esc(x.label || x.title || "Learn more"));
      a.href = x.url;
      if (/^https?:/.test(x.url)) { a.target = "_blank"; a.rel = "noopener"; }
      w.appendChild(a);
    }
    return w;
  }

  function sourcesBlock() {
    var w = el("div", "sources");
    if (!D.sources || !D.sources.length) return w;
    w.appendChild(el("h3", "", "Sources"));
    var ol = el("ol");
    D.sources.forEach(function (s) {
      ol.appendChild(el("li", "", esc(s.title) + ' — <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + "</a>"));
    });
    w.appendChild(ol);
    if (D.sourcesNote) w.appendChild(el("p", "", md(D.sourcesNote)));
    return w;
  }

  // Footer
  var f = document.getElementById("drill-footer");
  if (f) {
    f.innerHTML = '<span class="fb-brand">' + esc(D.brand || "One Skill Drill") + '</span>' +
      (D.footer || []).map(function (p) { return "<p>" + md(p) + "</p>"; }).join("");
  }
  document.title = D.title + " · " + (D.brand || "One Skill Drill");
  intro();
})();
