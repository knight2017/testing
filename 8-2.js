var x = prompt("1");
var y = prompt("2");
var z = prompt("3");
var bigger = function(a,b,c){

 if (a>b && a>c){
  return a;
} else if (b > a && b > c){
   return b;
 } else {
   return c;
 };
};

alert(bigger(x,y,z) + " is bigger")
