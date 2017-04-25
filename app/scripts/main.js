var firstSectionTop = $('section#summary').offset().top;

$(window).scroll(function() {
  var scrollFromTop = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, '+ scrollFromTop/3 +'%)'
  });

  $('.logo-name').css({
    'transform': 'translate(0px, -' + scrollFromTop/10 + '%)'
  });

  if (scrollFromTop >= firstSectionTop) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(300);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(300);   // Else fade out the arrow
  }
});

$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 500);
});


$('#scroll-to-first-section').click(function() {
  $('body,html').animate({
    scrollTop : firstSectionTop                     // Scroll to first section
  }, 1000);
});

var $root = $('html, body');
$('a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 1000, function () {
    window.location.hash = href;
  });
  return false;
});
