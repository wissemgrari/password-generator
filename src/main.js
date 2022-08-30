const CHARS_LOWER = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const CHARS_UPPER = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SYMBOLS = ['!', '#', '$', '%', '@', '&', '(', ')', '*', '+'];

const slider = document.querySelector('#slider');
let charsRange = document.querySelector('#value');
const generatedPassword = document.querySelector('#generatedPassword');
const button = document.querySelector('button');
const copyButton = document.querySelector('.copy-btn');

// password option
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

button.addEventListener('click', generatePassword);

slider.oninput = setSliderValue;
function setSliderValue() {
  charsRange.innerText = this.value;
}

function generatePassword() {
  let range = parseInt(slider.value);
  let password = '';

  while (range > 0) {
    if (option1.checked) {
      password += CHARS_LOWER[getRandomNumber(0, 25)];
    }
    if (option2.checked) {
      password += CHARS_UPPER[getRandomNumber(0, 25)];
    }
    if (option3.checked) {
      password += NUMBERS[getRandomNumber(0, 9)];
    }
    if (option4.checked) {
      password += SYMBOLS[getRandomNumber(0, 9)];
    }
    range--;
  }
  let formatedPassword = password
    .split('')
    .sort((a, b) => Math.random() - 0.5)
    .join('')
    .slice(0, Number(slider.value));

  generatedPassword.value = formatedPassword;
}

copyButton.addEventListener('click', copyToClipBoard);
function copyToClipBoard() {
  generatedPassword.select();
  generatedPassword.setSelectionRange(0, 99999);
  document.execCommand('Copy');
  navigator.clipboard.writeText(generatedPassword.value);

  let tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copied!';
}

copyButton.addEventListener('mouseout', () => {
  let tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copy to clipboard';
});

let strength = document.getElementById('strength');

let checkboxs = document.querySelectorAll('input[type=checkbox]');
checkboxs.forEach((checkbox) =>
  checkbox.addEventListener('change', checkStrength)
);

let level = document.querySelector('.level');
// check the password strength
function checkStrength() {
  let checked = 0;
  checkboxs.forEach((cb) => {
    cb.checked ? checked++ : checked;
  });

  switch (checked) {
    case 0:
      button.disabled = true;
      button.classList.add('cursor-no-drop');
      break;
    case 1:
      strength.innerText = 'very weak';
      level.className = 'level very-weak';
      button.disabled = false;
      button.classList.remove('cursor-no-drop');
      break;
    case 2:
      strength.innerText = 'weak';
      level.className = 'level weak';
      button.disabled = false;
      button.classList.remove('cursor-no-drop');
      break;
    case 3:
      strength.innerText = 'medium';
      level.className = 'level medium';
      button.disabled = false;
      button.classList.remove('cursor-no-drop');
      break;
    case 4:
      strength.innerText = 'strong';
      level.className = 'level strong';
      button.disabled = false;
      button.classList.remove('cursor-no-drop');
      break;
    default:
      break;
  }
}
