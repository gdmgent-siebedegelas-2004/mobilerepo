// Schrijf een stuk code die een functie squareArray bevat. Deze methode heeft een array als parameter en zal alle getallen in deze array tot de macht twee verheven. Gebruik de map methode.
const squareArray = (arr) => arr.map((number) => Math.pow(number, 2));
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(numbers);

//
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
