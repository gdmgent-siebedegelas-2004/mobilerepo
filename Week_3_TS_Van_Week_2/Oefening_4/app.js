// Oefening 4
// Schrijf een stuk code die alle elementen van onderstaande array aan elkaar plakt, zodat je hallo krijgt. Gebruik hiervoor uitsluitend de reduce methode.
var colors = ["h", "a", "l", "l", "o"];
var reducer = colors.reduce(function (acc, color) { return acc + color; });
console.log(reducer);
