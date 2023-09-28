// Oefening 4
// Schrijf een stuk code die alle elementen van onderstaande array aan elkaar plakt, zodat je hallo krijgt. Gebruik hiervoor uitsluitend de reduce methode.

const colors = ["h", "a", "l", "l", "o"];

const reducer = colors.reduce((acc, color) => acc + color);

console.log(reducer);
