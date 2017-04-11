let power = true;
let arr = $('.status li');
let i = 0;

function changeMetric() {
  $('.celsius').click(function() {
    $('.farenheit').addClass('metric-deselected');
    $('.celsius').removeClass('metric-deselected');
    $('.temperature p').html('38<sup>&deg</sup>');
  });
  $('.farenheit').click(function() {
    $('.celsius').addClass('metric-deselected');
    $('.farenheit').removeClass('metric-deselected');
    $('.temperature p').html('102<sup>&deg</sup>');
  });
}

function switchPower(){
  $('.power-button').click(() => {
    if(power) {
      $('.power-button').attr('src', 'images/power-off.svg');
      power = false;
    } else {
      $('.power-button').attr('src', 'images/power-on.svg');
      power = true;
    }
  });
}

function showTempValue(newValue) {
  $('.temperature-value').html(newValue);
}

function showTimeValue(newValue) {
  $('.time-value').html(newValue);
}

switchPower();
changeMetric();
