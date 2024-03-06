/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


function reverseWord(word) {

  console.log(word);

  const userWordArray = Array.from(word)

  const userWordArrayReversed = userWordArray.reverse();

  const userWordReversed = userWordArrayReversed.join("");

  return userWordReversed
};

const reversedWord = reverseWord("Ciao");

console.log(reversedWord);