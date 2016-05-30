var rev = function(str){
 var temp = '';
 // temp.concat('sda')
 for(var i = str.length - 1; i >= 0; i--){
    temp += str[i];
 };
 return temp;
};

console.log(rev("a12345678"));
