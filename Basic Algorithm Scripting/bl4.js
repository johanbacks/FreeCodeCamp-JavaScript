function findLongestWordLength(str) {
 var palavra  = str.stlit("");
 var maxPalavra = [];
 for (var i = 0 ; palavra.length < 0 ; i++){
   if(palavra[i].length > maxPalavra){
     maxPalavra = palavra[i].length;
   }
 }
 return maxPalavra
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength)
  