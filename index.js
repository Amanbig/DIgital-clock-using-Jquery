$(document).ready(setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  $(".sem").addClass("hide");
  
  $(".ten1, .one1, .ten2, .one2, .ten3, .one3").removeClass("hide");
  
  var ten1 = Math.floor(hours / 10);
  var one1 = Math.floor(hours % 10);
  var ten2 = Math.floor(minutes / 10);
  var one2 = Math.floor(minutes % 10);
  var ten3 = Math.floor(seconds / 10);
  var one3 = Math.floor(seconds % 10);
  
  digit(ten1, $(".ten1"));
  digit(one1, $(".one1"));
  digit(ten2, $(".ten2"));
  digit(one2, $(".one2"));
  digit(ten3, $(".ten3"));
  digit(one3, $(".one3"));
  
  setInterval(function() {
    $(".sem").removeClass("hide");
  });
}, 1000))

function digit(ten, h1) {
  if (ten === 0) {
    h1.eq(3).addClass("hide");
  } else if (ten === 1) {
    h1.slice(0, 5).addClass("hide");
  } else if (ten === 2) {
    h1.eq(0).addClass("hide");
    h1.eq(6).addClass("hide");
  } else if (ten === 3) {
    h1.eq(0).addClass("hide");
    h1.eq(1).addClass("hide");
  } else if (ten === 4) {
    h1.eq(1).addClass("hide");
    h1.eq(2).addClass("hide");
    h1.eq(4).addClass("hide");
  } else if (ten === 5) {
    h1.eq(1).addClass("hide");
    h1.eq(5).addClass("hide");
  } else if (ten === 6) {
    h1.eq(5).addClass("hide");
  } else if (ten === 7) {
    h1.slice(0, 5).addClass("hide");
    h1.eq(2).removeClass("hide");
  } else if (ten === 8) {
    h1.removeClass("hide");
  } else if (ten === 9) {
    h1.eq(1).addClass("hide");
  }
}
