// var flat = function(arr){
// var temp = [];
// for (var i = 0; i < arr.length; i++){
//   if(Array.isArray(arr[i])){
//
//      for(var x in arr[i]){
//         temp.push(arr[i][x]);
//      }
//   } else {
//
//         temp.push(arr[i]);
//   };
// };
//
// console.log(temp);
// };
//
// var a = [[2,3,4], ["Hello CodeCore", 1, true]];
//
// flat(a)
var flat = function(arr, temp = []){

for (var i = 0; i < arr.length; i++){
  if(Array.isArray(arr[i])){
    flat(arr[i], temp);
     }
  } else {
        temp.push(arr[i]);
  };
};

console.log(temp);
};



var a = [[2,3,4], ["Hello CodeCore",['e','r',2], true]];

flat(a)


// // var flat = function(arr){
// // var temp =[];
// // for (var i = 0; i < arr.length; i++){
// //   if(arr[i] ==1 ){
// //     temp.push([true, false]);
// //   } else {
// //     temp.push(arr[i]);
// //   };
// // };
// //
// // console.log(temp);
// // };
// flat([1,2,3,1,4,1,6])
