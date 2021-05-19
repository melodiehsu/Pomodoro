$(document).ready(function () {

  // Ringtones Setting

  function createSound(source){
    var sound = document.createElement('audio');
    sound.src = source;
    sound.volume = 0.5;
    sound.autoPlay = false;
    sound.preLoad = true;
    sound.controls = true;
    return sound;
  }

  var currentSound;

$('.ringtones ul li').click(function (e) { 
  e.preventDefault();
  $(this).find('.unchecked').toggle();
  $(this).find('.checked').toggle();
  $(this).siblings().find('.checked').hide();
  $(this).siblings().find('.unchecked').show();

  if (currentSound != undefined) {
    currentSound.pause();
  }
  console.log($(this)[0]);
  if ($(this)[0].textContent != 'None') {
    currentSound = createSound('sound/' + $(this)[0].querySelector('.sound').innerText + '.mp3');
    currentSound.play();
  }
});

// To-Do list setting

$('.to-do .subcategory .dropdown').click(function (e) { 
  e.preventDefault();
  $('.to-do .subcategory .dropup').toggle();
  $('.to-do .subcategory .dropdown').toggle();
  $('.to-do .dropdown_open').slideToggle();
});

$('.to-do .subcategory .dropup').click(function (e) { 
  e.preventDefault();
  $('.to-do .subcategory .dropup').toggle();
  $('.to-do .subcategory .dropdown').toggle();
  $('.to-do .dropdown_open').slideToggle();
});

$('.done .subcategory .dropdown').click(function (e) { 
  e.preventDefault();
  $('.done .subcategory .dropup').toggle();
  $('.done .subcategory .dropdown').toggle();
  $('.done .dropdown_open').slideToggle();
});

$('.done .subcategory .dropup').click(function (e) { 
  e.preventDefault();
  $('.done .subcategory .dropup').toggle();
  $('.done .subcategory .dropdown').toggle();
  $('.done .dropdown_open').slideToggle();
});


});
