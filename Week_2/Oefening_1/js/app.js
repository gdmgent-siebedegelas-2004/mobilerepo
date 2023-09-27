// Oef
console.log("Oef 1");

const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci sed augue iaculis finibus. Sed sapien leo, feugiat eu hendrerit non, aliquet iaculis ante.";

const splittedSen = sentence.split("");
const newLetters = splittedSen.map((char) => {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
});

console.log(newLetters.join(""));
