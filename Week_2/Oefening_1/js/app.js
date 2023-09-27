// Oef
const oefening1 = "Oef 1";
console.log(oefening1);

const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci sed augue iaculis finibus. Sed sapien leo, feugiat eu hendrerit non, aliquet iaculis ante.";

const splittedSentence = sentence.split("");
const newSize = splittedSentence.map((char) => {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
});
console.log(newSize.join(""));
