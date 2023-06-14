const bookDisplay = document.querySelector('.bookContainer');
const formDisplay = document.querySelector('.formContainer');
const contactDisplay = document.querySelector('.contactContainer');
const form = document.querySelector('form');
// toggle display between the list, add book and contact

export function displayList() {
  bookDisplay.style.display = 'block';
  formDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
}

export function displayAdd() {
  bookDisplay.style.display = 'none';
  formDisplay.style.display = 'block';
  contactDisplay.style.display = 'none';
}

export function displayContact() {
  bookDisplay.style.display = 'none';
  formDisplay.style.display = 'none';
  contactDisplay.style.display = 'block';
}
