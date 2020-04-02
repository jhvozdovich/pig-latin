function pigLatin(word) {
  var letters = /[A-Za-z]/;      
  var vowels = /^[aeiou]$/;  
  
  var wordArray = word.split("");
  var newArray = [];

  function findFirstVowel(word) {
    var vowelIndexArray = [];
    wordArray.forEach(function(letter) {
      if (letter.match(vowels)) {
        var vowelIndex = wordArray.indexOf(letter);
        vowelIndexArray.push(vowelIndex);
      }
    })
     return Math.min.apply(Math, vowelIndexArray);
    }

  var firstVowel = findFirstVowel(wordArray);

  if (wordArray[0].match(vowels)) {
    var newArray = wordArray;
    newArray.push("way");
    return newArray;
  } else {
    
    for (var i = 0; i < firstVowel; i++) {
      
      if (!wordArray[i].match(vowels)) { 
        newArray.push(wordArray[i], "ay");
        continue;
      }
    }
    var finalArray = (wordArray.slice(firstVowel) + newArray).split(",");
    return finalArray.join("");
  }
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
