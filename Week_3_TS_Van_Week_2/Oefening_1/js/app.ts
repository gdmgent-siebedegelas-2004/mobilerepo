// Oef
const oefening1: string = "Oef 1";
console.log(oefening1);

const sentence: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci sed augue iaculis finibus. Sed sapien leo, feugiat eu hendrerit non, aliquet iaculis ante.";

const splittedSentence: string[] = sentence.split("");

const newSize: string[] = splittedSentence.map((char) => {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
});
console.log(newSize.join(""));

console.log("Ur mom gay");
