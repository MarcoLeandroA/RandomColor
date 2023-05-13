const btnChangeColor = document.getElementById('changeColor');
const colorName = document.getElementById('colorName');

btnChangeColor.addEventListener('click', () => {
  let randomColor = Math.floor(Math.random() * 0xffffff);
  document.body.style.background = `#${randomColor.toString(16)}`;
  colorName.textContent = `#${randomColor.toString(16)}`;
});

