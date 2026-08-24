// Critical Insight Inc. — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile hamburger menu toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Desktop dropdown ("Explore CognOS") — delay-based hover so moving the
  // mouse from the link down into the menu never closes it prematurely,
  // regardless of the exact pixel gap or browser hover-geometry quirks.
  var hideTimer = null;
  document.querySelectorAll('.nav-item').forEach(function (item) {
    var dropdown = item.querySelector('.nav-dropdown');
    if (!dropdown) return;

    function show() {
      clearTimeout(hideTimer);
      dropdown.classList.add('force-open');
    }
    function scheduleHide() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        dropdown.classList.remove('force-open');
      }, 250);
    }

    item.addEventListener('mouseenter', show);
    item.addEventListener('mouseleave', scheduleHide);
    dropdown.addEventListener('mouseenter', show);
    dropdown.addEventListener('mouseleave', scheduleHide);
  });

  // Lightbox for screenshot cards (Learning Hub page only — safe no-op elsewhere)
  var lightboxOverlay = document.getElementById('lightboxOverlay');
  var lightboxImg = document.getElementById('lightboxImg');
  if (lightboxOverlay && lightboxImg) {
    document.querySelectorAll('.screenshot-card img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxOverlay.classList.add('open');
        // Force an explicit repaint after the class change. Some mobile
        // browsers can be slow to composite a newly-shown fixed-position
        // overlay on a very long page; reading offsetHeight forces the
        // browser to flush layout/paint immediately instead of deferring it.
        void lightboxOverlay.offsetHeight;
      });
    });
    lightboxOverlay.addEventListener('click', function () {
      lightboxOverlay.classList.remove('open');
    });
  }
});
