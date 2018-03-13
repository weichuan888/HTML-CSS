var CountDownDate = new Date("Feb 2, 2018 00:00:00").getTime();

var x = setInterval(function() {
  var now= new Date().getTime();
  var distance = CountDownDate - now;

  var days= Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60))/ 1000);

  document.getElementById('compte_a_rebours').innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

  if (distance < 0 ) {
    clearInterval(x);
    document.getElementById('compte_a_rebours').innerHTML = "Expired";
  }
})
