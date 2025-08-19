const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.style.flexBasis = `${(1 / 16) * 100}%`;
  container.appendChild(square);
}

const handleMouseEnter = (e) => {
  e.target.classList.add('mouse-hover');
};

const squares = document.querySelectorAll('#container div');
squares.forEach((square) => {
  square.addEventListener('mouseenter', handleMouseEnter);
});
