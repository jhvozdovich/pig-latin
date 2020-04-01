function pigLatin(word) {
  var letters = /[A-Za-z]/;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  console.log(word);
  console.log(typeof(word));
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

    console.log(userSentence);
    console.log(sentenceLength);
    console.log(userSentenceArray);
    if (sentenceLength > 0) {
      for (var i = 0; i < userSentenceArray.length; i++) {
        var newString = userSentenceArray[i].toString();
        console.log(typeof(newString));
        var newWord = pigLatin(newString);
        results.push(newWord);
      }
    } else {
      alert("Please enter your words to translate!");
    }

    var stringResults = results.join(" ");

    $("#results").text(stringResults);

  });
});