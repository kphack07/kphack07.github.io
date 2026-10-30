/* ============================================================
   Portfolio interactions (vanilla JS, no dependencies)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- terminal typing effect ---------- */
  var body = document.getElementById("terminal-body");
  if (body) {
    var lines = Array.prototype.slice.call(body.children);
    body.innerHTML = "";
    var speed = 22; // ms per character
    var lineDelay = 280; // pause between lines

    function typeLine(el, text, done) {
      if (text.length === 0) { done(); return; }
      var i = 0;
      (function tick() {
        el.textContent += text[i];
        i += 1;
        if (i < text.length) { setTimeout(tick, speed); }
        else { done(); }
      })();
    }

    var idx = 0;
    function play() {
      if (idx >= lines.length) { return; }
      var el = lines[idx];
      var text = el.textContent;
      el.textContent = "";
      el.style.display = "block";
      body.appendChild(el);
      typeLine(el, text, function () {
        idx += 1;
        setTimeout(play, lineDelay);
      });
    }
    // small delay before starting
    setTimeout(play, 400);
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".section, .stat, .hl-card, .about-card, .skill-block, .otw");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      io.observe(el);
    });
  }

  /* ---------- smooth scroll offset for sticky nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      }
    });
  });
})();
