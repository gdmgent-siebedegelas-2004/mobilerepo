// Hier beginnen we met het selecteren van de HTML-elementen die we nodig hebben.
const $box = document.getElementById("box"); // Het vak (box)
const $btnRandom = document.getElementById("btn-random"); // De knop (btn-random)
const $list = document.getElementById("list"); // De lijst (list)

// We maken een lege array om de gegenereerde kleuren op te slaan.
const colors = [];

// Deze functie genereert een willekeurig getal tussen 0 en 255 (voor kleurcomponenten).
const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

// Deze functie genereert een willekeurige RGB-kleur en retourneert deze in het "rgb(r, g, b)" formaat.
const getRandomColor = () => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

// Deze functie wordt uitgevoerd wanneer de knop wordt geklikt.
const onButtonClick = () => {
  // We genereren een willekeurige kleur en stellen de achtergrondkleur van het vak in.
  const color = getRandomColor();
  $box.style.backgroundColor = color;

  // We voegen de willekeurige kleur toe aan de 'colors'-array.
  colors.push(color);

  // We maken een nieuw lijstitem (li-element) aan voor de gegenereerde kleur.
  const $item = document.createElement("li");
  $item.style.backgroundColor = color;

  // We voegen het lijstitem toe aan de lijst.
  $list.appendChild($item);
};

// We voegen een eventlistener toe aan de knop, zodat de functie wordt uitgevoerd wanneer erop wordt geklikt.
$btnRandom.addEventListener("click", onButtonClick);
