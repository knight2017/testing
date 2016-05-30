
var large = function(arr){
 var temp = arr[0];
  for (x in arr){
    if(arr[x] > temp){
     temp = arr[x];
    };
  };

  return temp;
};

var sort = function(arr){
 var temp = 0;
  for ( x in arr){
     for (y in arr){
       if (arr[x] > arr[y]){
             temp = arr[x];
             arr[x] = arr[y];
             arr[y] = temp;
       };
     };
  };
  return arr
};



a = [34,3,4,56,7,8,1,0]

console.log(sort(a))
