const catdog = [
  "https://api.thecatapi.com/v1/images/search",
  "https://dog.ceo/api/breeds/image/random",
];

// Using these api:
// https://thecatapi.com/
// https://dog.ceo/dog-api/

function getCatDog() {
  const index = Math.floor(Math.random() * catdog.length);

  return fetch(catdog[index])
    .then((data) => data.json())
    .then((api) => (index === 0 ? api[0].url : api.message));
}

async function showCatDog() {
  const url = await getCatDog();
  document.querySelector(
    ".catdogImage"
  ).innerHTML = `<img src="${url}" title="Imagem gerada aleatoriamente de um pet." alt="Imagem gerada aleatoriamente de um pet."/>`;
}
