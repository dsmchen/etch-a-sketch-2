const container = document.querySelector('#container');
const button = document.querySelector('button');

const generateGrid = (number) => {
  if (container.hasChildNodes) {
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    removeAllChildNodes(container);
  }

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`;
  };

  for (let i = 0; i < number * number; i++) {
    const square = document.createElement('div');
    square.style.flexBasis = `${(1 / number) * 100}%`;
    square.addEventListener('mouseenter', handleMouseEnter);
    container.appendChild(square);
  }
};

const handleClick = () => {
  let number = prompt('How many squares per side? Min 1. Max 100.');

  if (number > 100) {
    number = 100;
  } else if (number < 1) {
    number = 1;
  } else if (number % 1 !== 0) {
    number = Math.round(number);
  }

  generateGrid(number);
};

button.addEventListener('click', handleClick);

generateGrid(16);
