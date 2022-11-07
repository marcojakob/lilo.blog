document.addEventListener("DOMContentLoaded", function () {
  // Init image zoom.
  mediumZoom(".article-content *:not(a) > img, [data-zoomable]");

  // Hide navbar on scroll down.
  var autohide = document.querySelector('.autohide');
  if (autohide) {
    var lastScrollTop;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      if (lastScrollTop !== undefined && scrollTop > 120 && scrollTop > lastScrollTop) {
        autohide.classList.remove('scrolled-up');
        autohide.classList.add('scrolled-down');
      } else {
        autohide.classList.remove('scrolled-down');
        autohide.classList.add('scrolled-up');
      }
      lastScrollTop = scrollTop;
    });
  }
});
