document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var option ={
        fullWidth: true,
        indicators: true,
        duration: 100
    }
    var instances = M.Carousel.init(elems,option);
    
  });