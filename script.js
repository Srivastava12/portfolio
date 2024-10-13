$(document).ready(function () {
  // Add any additional animations or interactive features here
  // For example, smooth scroll on navigation
  $('a').on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});