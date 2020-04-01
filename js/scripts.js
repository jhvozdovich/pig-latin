function pigLatin(word) {
  var letters = /[A-Za-z]/;      // /^[A-Za-z]+$/
  //var vowels = /[aeiouAEIOU]/;
  var vowels = /^[aeiou]$/;   // /[aeiouAEIOU] previous

  //var consonants = /[bcdfghjklmnpqrstvwxys]/gi - regex for consonants
  
  var wordArray = word.split("");
  var newArray = [];
  var endingArray =[];

  // wordArray.forEach(function(character) {
  //   //var firstVowel = wordArray.findIndex();
  //   //console.log(firstVowel);
  //   if (!(character.match(letters))) {
  //     newArray.push(character);
  //     return newArray;
  //   } else if (character.match(vowels)) {
  //     newArray.push(character);
  //   } else if (!character.match(vowels)) {
  //     newArray.push(character);
  //   }
  // });
  function firstVowel(word) {
    var vowelIndexArray = [];
    wordArray.forEach(function(letter) {
      if (letter.match(vowels)) {
        var vowelIndex = wordArray.indexOf(letter);
        vowelIndexArray.push(vowelIndex);
      }
    })
     console.log("first vowel index " + Math.min.apply(Math, vowelIndexArray));
     return Math.min.apply(Math, vowelIndexArray);
    }

  if (wordArray[0].match(vowels)) {
    var newArray = wordArray;
    newArray.push("way");
    return newArray;
  } else {
    
    for (var i = 0; i < firstVowel(wordArray); i++) {
      if (!wordArray[i].match(vowels)) { 
        newArray.push(wordArray[i]);
        console.log(newArray);
        continue;
      }
    }

    return newArray;
    //return wordArray.toString().substr(firstVowel(wordArray)) + newArray.toString() + "ay";
  }
    // wordArray.forEach(function(character){
    //   while (!character.match(vowels)) {
      
    //     newArray.push(character);
    //     console.log(newArray);
    //     return newArray
    //   } 

    // })
  

  // console log first consonants- isolate
  // push to a new array
  // create new version of original array to subtract starting consonants
  // add new array + ay to end of subtracted array

    // wordArray.forEach(function(character) {
    //   console.log("original character " + character);
    //   if (!character.match(vowels)) {
    //     var beginningLetters = wordArray.shift();
    //     console.log("beginning letters " + beginningLetters);
    //     console.log("wordArray " + wordArray);
    //     endingArray.push(beginningLetters);
    //     console.log("endingArray " + endingArray);
    //     return endingArray;
    //   } else {
    //     return wordArray;
    //   }
    // })
  //   // newArray = wordArray + endingArray + "ay";
  // } 
  // return newArray;
}

$(document).ready(function(){
  $("#user-input").submit(function(){
    event.preventDefault();
    var userSentence = $("input#sentence").val();
    var sentenceLength = userSentence.length;
    var userSentenceArray = userSentence.split(" ");

    var results = [];

    if (sentenceLength > 0) {
      userSentenceArray.forEach(function(word) {
        var newString = word.toString();
        var newWord = pigLatin(newString);
        results.push(newWord);
      })
    } else {
      alert("Please enter your words to translate!");
    }

    var stringResults = results.join(" ");

    $("#results").text(stringResults);

  });
});
