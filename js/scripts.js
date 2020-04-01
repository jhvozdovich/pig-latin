function pigLatin(word) {
  var letters = /[A-Za-z]/;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var wordArray = word.split("");
  var newArray = [];

  wordArray.forEach(function(character) {
    if (!(character.match(letters))) {
      newArray.push(character);
    } 
  });

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