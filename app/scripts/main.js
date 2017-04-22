console.log('\'Allo \'Allo!');

$(window).scroll(function() {
  var scrollFromTop = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, '+ scrollFromTop/3 +'%)'
  });

  $('.logo-name').css({
    'transform': 'translate(0px, -' + scrollFromTop/10 + '%)'
  });
});
