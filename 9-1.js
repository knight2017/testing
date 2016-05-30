var letterCount = function(str){
var strT = str.split('');
var hash = {};
     for (var i = 0; i < strT.length; i++){
       if (hash[strT[i]]){
         hash[strT[i]]++;
       } else {
          hash[strT[i]] = 1;
       };
     };

var letter = "a" , count = 1;
for (var x in hash ){
   if (hash[x] > count){
      letter = x;
      count  = hash[x];
   };
};
// console.log(hash);
console.log(letter + " occured " + count + " times" );
};


a = "qaduchnnnnsnbjadgwu";
letterCount(a)
