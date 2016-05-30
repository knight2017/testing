
var guess = function(n, p){
var count = 1
while(n != p){
  n = prompt("guess");
  if (n < p){
    alert("too small");
  } else {
    alert("TOO BIG");
  }
  count++;
};
alert("It's " + p + " in " + count+" tries!");
};

var ans = prompt("guess");
var prize = Math.round(Math.random()*100)

guess(ans, prize)
