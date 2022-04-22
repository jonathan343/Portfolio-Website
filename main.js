// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}







var wrapper = document.querySelector('.loading-screen svg')
// // We are only adding and removing the 'active' class,
// // the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}

function fade1() {
var i = 10.0;
var loading_screen = document.querySelector('.loading-svg')
loading_screen.style.opacity = 1;
var k = window.setInterval(function() {
    if (i <= 0.0) {
    loading_screen.style.opacity = 0.0;
    clearInterval(k);
    } else {
    loading_screen.style.opacity = i / 10.0;
    i--;
    }
}, 60);
};

function fade2() {
    var i = 10.0;
    var loading_screen = document.querySelector('.loading-screen')
    loading_screen.style.opacity = 1;
    var k = window.setInterval(function() {
        if (i <= 0.0) {
        loading_screen.style.opacity = 0.0;
        clearInterval(k);
        } else {
        loading_screen.style.opacity = i / 10.0;
        i--;
        }
    }, 70);
    };
$('body').css({
  overflow: 'hidden',
});

disableScroll();
setTimeout(draw, 300)
setTimeout(function() {
    fade1();
  }, 2000);

setTimeout(function() {
    fade2();
}, 2600);
setTimeout(function() {
    document.querySelector('.loading-screen').style.display = "none";
    $('body').css({
      overflow: 'auto'
    });
}, 3400);
enableScroll();

if ($(window).width() > 960) {
  document.getElementById('home-svg').setAttribute("viewBox", "0 0 1440 1024");
}
else{
  document.getElementById('home-svg').setAttribute("viewBox", "");
}
$(window).resize(function(){
  if ($(window).width() > 960) {
    document.getElementById('home-svg').setAttribute("viewBox", "0 0 1440 1024");
  }
  else{
    document.getElementById('home-svg').setAttribute("viewBox", "");
  }
});

// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  AOS.init();
// Closes the navigation after use or touch
$(document).ready(function () {
    $(document).click(
        function (event) {
            var target = $(event.target);
            var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
            if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        }
    );
});

// Slow Scroll
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });