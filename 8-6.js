var capEven = function(str){

var temp = str.split('');
var arr = [];
for (x in temp){
if (x % 2 == 0){
  arr[x] = temp[x].toLowerCase();
} else {
  arr[x] = temp[x].toUpperCase();
};
};
 return arr.join('');
};


console.log(capEven("asdasdasdasd"));
