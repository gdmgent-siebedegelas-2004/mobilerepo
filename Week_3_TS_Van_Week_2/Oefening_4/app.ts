// Oefening 4
// Schrijf een stuk code die alle elementen van onderstaande array aan elkaar plakt, zodat je hallo krijgt. Gebruik hiervoor uitsluitend de reduce methode.

const colors: string[] = ["h", "a", "l", "l", "o"];

const reducer: string = colors.reduce((acc, color) => acc + color);

console.log(reducer);

export default colors;
