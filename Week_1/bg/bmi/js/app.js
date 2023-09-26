// Met window.alert() kunnen we tekst weergeven via een dialoogcenster.
const height = prompt("Geef je hoogte mee in meter");
const weight = prompt("Geef je gewicht mee in kg");

// Schrijf een functie calculateBMI() om de BMI te berekenen.
const calculateBMI = (height, weight) => {
  return weight / (height * height);
};

// Schrijf een functie bmiToString(bmi) om op basis van de BMI-waarde een tekst terug te geven volgens de volgende vergelijkingen:
// Als BMI kleiner dan 18.5 geef dan de tekst ondergewicht terug.
// Als BMI groter dan 25 geef dan de tekst overgewicht terug.
// Als BMI groter of gelijk aan 18.5 en kleiner of gelijk aan 25 geef dan de tekst een gezond gewicht terug.
const bmiToString = (bmi) => {
  let result = "";
  if (bmi > 25) {
    result = "je bent te dik";
  }
  if (bmi < 18.5) {
    result = "je bent te mager";
  } else {
    result = "je bent gezond";
  }
  return `Je BMI score is ${bmi} ${result}`;
};

const bmi = calculateBMI(parseFloat(height), parseFloat(weight));

alert(bmiToString(bmi));
