/* ============================================================
   Portfolio interactions (vanilla JS, no dependencies)
   - terminal typing effect
   - scroll reveal
   - animated stat count-up
   - skill bar fill on view
   - smooth-scroll offset for sticky nav
   ============================================================ */
(function () {
  "use strict";

  /* ---------- terminal typing effect ---------- */
  var body = document.getElementById("terminal-body");
  if (body) {
    var lines = Array.prototype.slice.call(body.children);
    body.innerHTML = "";
    var speed = 22;      // ms per character
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
    setTimeout(play, 400);
  }

  /* ---------- stat count-up ---------- */
  var animStarted = false;
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.textContent.replace(/[\d.,]+/, "").trim(); // e.g. "%"
    var prefix = el.textContent.replace(/[\d.,]+/, "").replace(suffix, "").trim(); // e.g. "#"
    var duration = 1200;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      var val = target * eased;
      var text = prefix + val.toFixed(decimals) + suffix;
      el.textContent = text;
      if (p < 1) { requestAnimationFrame(step); }
      else { el.textContent = prefix + target.toFixed(decimals) + suffix; }
    }
    requestAnimationFrame(step);
  }

  /* ---------- IntersectionObserver: reveal + counters + skill bars ---------- */
  var revealEls = document.querySelectorAll(".section, .stat, .hl-card, .about-card, .skill-block, .edu-card, .cert-card, .tl-item, .otw, .contact-link");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.unobserve(el);

        // count-up stats
        if (!animStarted && el.classList.contains("stat")) {
          animStarted = true;
          el.querySelectorAll(".stat-num[data-count]").forEach(animateCount);
        }
        // skill bars
        if (el.classList.contains("skill-block")) {
          el.querySelectorAll(".skill-bar i[data-fill]").forEach(function (bar) {
            bar.style.width = bar.getAttribute("data-fill") + "%";
          });
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      io.observe(el);
    });

    // animate the first visible stat immediately if already on screen
    var stats = document.querySelectorAll(".stat .stat-num[data-count]");
    if (stats.length && !animStarted) {
      var first = stats[0];
      var rect = first.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        animStarted = true;
        stats.forEach(animateCount);
      }
    }
  } else {
    // fallback: show bars at full width
    document.querySelectorAll(".skill-bar i[data-fill]").forEach(function (bar) {
      bar.style.width = bar.getAttribute("data-fill") + "%";
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
          var top = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      }
    });
  });
})();
