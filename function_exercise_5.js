function findLongestWord(array){
for(var i=0; i < array.length; i++){
   array.max = function(a){
    return Math.max.apply(Math, a);
};
};
}
findLongestWord([1,2,3,4])
