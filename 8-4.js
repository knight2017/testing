var a = prompt('fizz');
var b = prompt('buzz');
var temp = [];


for(var i = 1; i <101; i++){
if (i%a == 0 && i%b == 0){
 console.log("fizbuzz");
 temp.push("fizzbuzz");
} else if (i % a == 0){
  console.log("fizz");
  temp.push("fizz");

} else if (i % b == 0){
  console.log("buzz");
  temp.push("buzz");

}else{
  console.log(i);
  temp.push(i);
};
};

console.log(temp);
