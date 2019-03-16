// Everything OK?
console.log('OK');

// Lightgallery

$('#lightgallery').lightGallery({
});

// Controls for Views
$('#grid').click( function(){
  
  $('main').removeClass('list');
  $('main').addClass('grid');
  //console.log('grid click');
});

$('#list').click( function(){
  
  $('main').removeClass('grid');
  $('main').addClass('list');
  //console.log('list click');
});

/*$('nav').tabslet({
  mouseevent: 'hover',
  attribute: 'href',
  animation: false
});*/