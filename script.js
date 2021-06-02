const memes = document.getElementById('memes');

memesArray.map(meme => {
  memes.innerHTML += `
  <figure>
    <img src="${meme.src}" alt="meme ${meme.id}" width="200">
    <figcaption>##meme/${meme.id}/Texto 1/Texto 2</figcaption>
  </figure>
  `;
});
