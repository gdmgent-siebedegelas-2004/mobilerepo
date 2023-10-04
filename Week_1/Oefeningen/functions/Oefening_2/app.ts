function addItem(str: string, callbackFunction: () => void) {
  // Voer de callback-functie uit
  callbackFunction();

  // Voeg de string toe aan iets anders (in dit geval gewoon een console.log)
  console.log(`Item toegevoegd: ${str}`);
}

// Een voorbeeldfunctie om mee te geven als callback
function helloWorld() {
  console.log("Hello world");
}

// Gebruik van de addItem-functie met de helloWorld-functie als callback
addItem("Voorbeelditem", helloWorld);
