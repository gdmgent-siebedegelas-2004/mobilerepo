// Oefening 5
// Maak een functie filterByProperty die de volgende parameters heeft:
// een array om te filteren
// de property waar op moet gefilterd worden
// de waarde van voorgaande property
// Deze functie geeft een nieuwe array terug.
const filterByProperty = (arr, property, value) =>
  arr.filter((item) => item[property] === value);

const people = [
  { name: "Siebe", property: "Apple" },
  { name: "Jan", property: "Nokia" },
  { name: "Baptist", property: "Andriod" },
  { name: "Lennert", property: "Andriod" },
];

const filteredProperty = filterByProperty(people, "property", "Andriod");

console.log(filteredProperty);
