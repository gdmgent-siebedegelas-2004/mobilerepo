// Oefening 5
// Maak een functie filterByProperty die de volgende parameters heeft:
// een array om te filteren
// de property waar op moet gefilterd worden
// de waarde van voorgaande property
// Deze functie geeft een nieuwe array terug.
interface Person {
  name: string;
  property: string;
}
const filterByProperty = (
  arr: Person[],
  property: string,
  value: string
): Person[] => arr.filter((item) => item[property] === value);

const people: Person[] = [
  { name: "Siebe", property: "Apple" },
  { name: "Jan", property: "Nokia" },
  { name: "Baptist", property: "Andriod" },
  { name: "Lennert", property: "Andriod" },
];

const filteredProperty = filterByProperty(people, "property", "Andriod");

console.log(filteredProperty);

export default people;
