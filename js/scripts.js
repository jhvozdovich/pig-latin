function pigLatin(word) {
  var letters = /[A-Za-z]/;
  var vowels = /[aeiouAEIOU]/;
  var wordArray = word.split("");
  var newArray = [];

  wordArray.forEach(function(character) {
    if (!(character.match(letters))) {
      newArray.push(character);
    } else if (character.match(vowels)) {
      newArray.push(character);
    }
  });

  if (wordArray[0].match(vowels)) {
    newArray.push("way")
  }

  return newArray.join("");
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