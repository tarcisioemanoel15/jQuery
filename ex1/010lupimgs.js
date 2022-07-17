let limite;
function moverr(e) {
  $('#janela').animate({ left: "-=200" }, 1000, function () {
    // $('#info').html($('#janela').position().left);
    if ($('#janela').position().left == limite) {
      $('#janela').css('left', 0);
    }
  })
}

$(function (e) {
  limite = $('#janela img').length * $('#janela img').width() * -1

  $('#janela').append('<img>');
  $('#janela img:last').attr('src', "../img/1.jpg")

  setInterval(moverr, 2000)
})
