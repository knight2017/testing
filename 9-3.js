// var merge = function(arr1, arr2){
//   var hash = {};
//   var arrT = [];
//
//    for( var i = 0; i < arr1.length; i++){
//      if (!hash[arr1[i]]){
//        hash[arr1[i]] = 1;
//      };
//    };
//
//    for( var j = 0; j < arr2.length; j++){
//      if (!hash[arr2[j]]){
//        hash[arr2[j]] = 1;
//      };
//    };
//
//
//    for (x in hash){
//      arrT.push(x);
//    };
//
//    return arrT;
//
// };


var merge = function(arr1, arr2){


for (var i = 0; i < arr1.length; i++){
   for (var j= 0; j < arr2.length; j++){
      if (arr1[i]== arr2[j]){
        arr2 = arr2.slice(0, j).concat(arr2.slice(j+1, arr2.length));
      };
   };
};


for (x in arr1){

    arr2.push(arr1[x]);
};
return arr2;

}


var array1 = [1, 2, 4];
var array2 = [3,4,5];
console.log(merge(array1, array2));
