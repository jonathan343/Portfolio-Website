var wrapper = document.querySelector('.loading-screen svg')
// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}
// Play draw animation once
setTimeout(draw, 300)
setTimeout(function() {
    fade1();
  }, 2000);

setTimeout(function() {
    fade2();
}, 2600);
setTimeout(function() {
    document.querySelector('.loading-screen').style.display = "none";
}, 3400);


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
// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

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