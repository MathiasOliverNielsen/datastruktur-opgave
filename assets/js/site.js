// write cool JS hwere!!
// --- Opret datastruktur og gem i localStorage (kun første gang) ---
if (!localStorage.getItem('user1')) {
  const users = {
    user1: { name: 'Anna', age: 25, color: '#ff0000' },
    user2: { name: 'Bent', age: 32, color: '#00ff00' },
    user3: { name: 'Carla', age: 41, color: '#0000ff' },
    user4: { name: 'Dennis', age: 19, color: '#ffff00' },
  };
  localStorage.setItem('users', JSON.stringify(users));
}
// ---
const userSelect = document.getElementById('userSelect');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const colorInput = document.getElementById('colorInput');
const saveButton = document.getElementById('saveButton');

// Event listener: vis data for valgt bruger
function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log('change user to: ' + selectedUser);
  // Hent data fra localStorage og vis i formularen
  const userData = localStorage.getItem(selectedUser);
  if (userData) {
    const user = JSON.parse(userData);
    nameInput.value = user.name;
    ageInput.value = user.age;
    colorInput.value = user.color;
    // Skift baggrundsfarve til den valgte brugers farve
    document.body.style.backgroundColor = user.color;
    // Skift tekstfarve afhængigt af baggrundsfarve
    setTextColorBasedOnBg(user.color);
    // Funktion til at vælge sort/hvid tekst afhængigt af baggrundsfarve
    function setTextColorBasedOnBg(bgColor) {
      // Fjern evt. # hvis den findes
      const hex = bgColor.replace('#', '');
      // Konverter til RGB
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      // Beregn luminans
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      // Skift tekstfarve
      if (luminance > 150) {
        document.body.style.color = '#222'; // sort
      } else {
        document.body.style.color = '#fff'; // hvid
      }
    }
  } else {
    nameInput.value = '';
    ageInput.value = '';
    colorInput.value = '';
    document.body.style.backgroundColor = '';
    document.body.style.color = '#222'; // sort tekst som default
  }
}

// Event listener: gem data fra formularen
saveButton.addEventListener('click', () => {
  console.log('save data');

  const selectedUser = userSelect.value;
  const name = nameInput.value;
  const age = ageInput.value;
  const color = colorInput.value;

  // Gem data i localStorage for den valgte bruger
  const userData = { name, age, color };
  localStorage.setItem(selectedUser, JSON.stringify(userData));

  // Opdater tekst i <select>-option
  const selectedOption = userSelect.querySelector(`option[value='${selectedUser}']`);
  if (selectedOption) {
    selectedOption.textContent = name;
  }
  userSelectChange();
});

userSelect.addEventListener('change', userSelectChange);

// Vis data for første bruger ved load
window.onload = userSelectChange;
