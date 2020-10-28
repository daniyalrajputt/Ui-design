$(document).ready(function(){

    // Anchor arrow click
    // smooth scroll to anchor tag
   $('a[href*="#"]:not([href="#featured"])').click(function() { // Check to see if anchor tag is not carousel's featured link
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            // Smooth scroll to link section
            $('html, body').animate({
              scrollTop: target.offset().top + 50
            }, 900);
            return false;
          }
        }
      });
      
    //highlight navigation
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      $('.progress-bar-dots').removeClass('active');
      $('.progress-bar--circle').removeClass('active');
  
      if (windowpos > $('#header').offset().top) {
        $('.progress-bar-dots').removeClass('active');
        $('a[href$="#header"]').addClass('active');
      } //windowpos
  
      if (windowpos > $('#section-1').offset().top) {
        $('.progress-bar-dots').removeClass('active');
        $('a[href$="#section-1"]').addClass('active');
        $('a[href$="#section-1"] .progress-bar--circle').addClass('active');
      } //windowpos
  
      if (windowpos > $('#section-2').offset().top) {
        $('.progress-bar-dots').removeClass('active');
        $('a[href$="#section-2"]').addClass('active');
        $('a[href$="#section-2"] .progress-bar--circle').addClass('active');
      } //windowpos
  
      // Scrollbar progression
          // pixels scrolled from top
      var scrollTop = $(window).scrollTop(),
          // document height
          docHeight = $(document).height(),
          // window height
          winHeight = $(window).height(),
          // percent of document scrolled
          scrollPercent = (scrollTop) / (docHeight - winHeight),
          scrollPercentRounded = Math.round(scrollPercent*28);
  
      // incement progress bar as user scrolls
      $('.progress-bar--increment').css('height', scrollPercentRounded + '%');
      // console.log(scrollPercentRounded)
    });
  
  }); // on load
  