// Oef
var oefening1 = "Oef 1";
console.log(oefening1);
var sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci sed augue iaculis finibus. Sed sapien leo, feugiat eu hendrerit non, aliquet iaculis ante.";
var splittedSentence = sentence.split("");
var newSize = splittedSentence.map(function (char) {
    if (char === char.toLowerCase()) {
        return char.toUpperCase();
    }
    else {
        return char.toLowerCase();
    }
});
console.log(newSize.join(""));
