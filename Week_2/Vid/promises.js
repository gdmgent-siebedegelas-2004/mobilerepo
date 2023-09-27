async function getJoke() {
  const url = "https://icanhazdadjoke.com";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeJson = await response.json();
  return jokeJson.joke;
}

getJoke().then((joke) => console.log(joke));
