var firstSectionTop = $('section#summary').offset().top;
var sectionHeader = $('section#summary h1:first-child');

$(window).scroll(function() {
  var scrollFromTop = $(this).scrollTop();
  // console.log($(this).scroll)

  $('.logo').css({
    'transform': 'translate(0px, '+ scrollFromTop/3 +'%)'
  });

  $('.logo-name').css({
    'transform': 'translate(0px, -' + scrollFromTop/10 + '%)'
  });

  //fade the scroll to top and page navigation
  //within the header
  if (scrollFromTop >= firstSectionTop) {
    $('#return-to-top').fadeIn(300);
    // $('#page-nav').fadeIn(300);
  } else {
    $('#return-to-top').fadeOut(300);
    // $('#page-nav').fadeOut(300);
  }

  var pageNavPosition = $('#page-nav').offset().top;


  if(scrollFromTop - firstSectionTop > 200) {
    var offset = scrollFromTop - firstSectionTop;
    console.log(offset);
    var offsetX = Math.min(0, offset/3 - 100);
    $('section#summary h1:first-child').css({
      'transform': 'translate('+ offsetX +'px, 0px)'
    });
  }

  // if(pageNavPosition >= sectionHeader.next().offset().top ) {
  //
  //   var offset = pageNavPosition - sectionHeader.next().offset().top;
  //
  //   var offsetX = Math.min(0, offset - 100);
  //   var offsetY = Math.max(0, -1 * (offset - 80));
  //   var letterSpacing =  Math.min(0, Math.round(offset / 100 * 15 - 15));
  //   $('section#summary h1:first-child').css({
  //     'transform': 'translate('+ offsetX +'px, ' + offsetY + 'px)',
  //     'letter-spacing': letterSpacing + 'px'
  //   });
  // }

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
