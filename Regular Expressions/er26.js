let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // alterado o S minusculo pois tem estaço em branco
let result = ohRegex.test(ohStr);
