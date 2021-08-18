let isOpen = false;

$(document).ready(function() {

  var hash = window.location.hash;
  if (hash && $(hash).length) {
    openSection(hash);
  }

  $.get('date.json', function(data) {
    $('#updated_date').html(data.date);
  });

  $('#links .button').click(function() {
    var selected = '#'+$(this).data('id');
    openSection(selected);
  });

  $('#discussions h3').click(function() {
    var selected = $(this).attr('id');
    openSection('#discussions', selected);
  });

  $('#projects h3').click(function() {
    var selected = $(this).attr('id');
    openSection('#projects', selected);
  });
});

function openSection(id, heading) {
  if (isOpen && isOpen === heading) closeSection(heading);
  else {
    $('.block').hide();
    if (heading) $('.toggle').hide();
    $(id).show();

    if (heading) {
      $('#'+heading+'-content').show();    
      if ($(id+' div.toggle:visible')[0]) {
        isOpen = heading;
      }
    }
    window.location.hash = id.substring(1);
    if (!heading) {
      $(window).scrollTop(0);
    }
  }
}

function closeSection(heading) {
  $('.toggle').hide();
  isOpen = null;
}

