// Cambia estas rutas por los nombres reales de tus imágenes.
// Guarda tus imágenes dentro de una carpeta llamada "img" junto a estos archivos.
const imagesByLevel = {
  1: [
    'img/level-1-opcion-1.png',
    'img/level-1-opcion-2.png'
  ],
  2: [
    'img/level-2-opcion-1.png',
    'img/level-2-opcion-2.png'
  ],
  3: [
    'img/level-3-opcion-1.png',
    'img/level-3-opcion-2.png'
  ],
  4: [
    'img/level-4-opcion-1.png',
    'img/level-4-opcion-2.png'
  ]
};

function getRandomImage(level) {
  const levelImages = imagesByLevel[level];
  const randomIndex = Math.floor(Math.random() * levelImages.length);
  return levelImages[randomIndex];
}

document.querySelectorAll('.level-card').forEach((card) => {
  const challengeButton = card.querySelector('.challenge-button');
  const resetButton = card.querySelector('.reset-button');
  const image = card.querySelector('.challenge-image');
  const level = card.dataset.level;

  challengeButton.addEventListener('click', () => {
    image.src = getRandomImage(level);
    card.classList.add('has-image');
  });

  resetButton.addEventListener('click', () => {
    image.removeAttribute('src');
    card.classList.remove('has-image');

    const message = card.querySelector('.placeholder p');
    message.textContent = 'Click Challenge to begin';
  });

  image.addEventListener('error', () => {
    card.classList.remove('has-image');
    image.removeAttribute('src');

    const message = card.querySelector('.placeholder p');
    message.textContent = 'Revisa la ruta de la imagen';
  });
});
