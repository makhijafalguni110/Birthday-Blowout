const flame = document.getElementById('flame');
const message = document.getElementById('message');
const blowButton = document.getElementById('blowButton');

blowButton.addEventListener('click', () => {
  if (flame.style.display !== 'none') {
    flame.style.display = 'none';
    message.style.display = 'block';
    blowButton.disabled = true;
    blowButton.innerText = "Blown!";
  }
});
