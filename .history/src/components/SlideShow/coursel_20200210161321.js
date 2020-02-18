document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider next');
    M.Carousel.init(elems,{ fullWidth: true, indicators: true, duration: 10});
    autoplay();
    function autoplay() {
   document.querySelectorAll('.carousel').classList.add('next');
      setTimeout(autoplay, 10000);
    }
    
  });