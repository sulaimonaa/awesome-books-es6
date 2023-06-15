const bookDisplay = document.querySelector('.bookContainer');
const formDisplay = document.querySelector('.formContainer');
const contactDisplay = document.querySelector('.contactContainer');
// toggle display between the list, add book and contact

export const displayList = () => {
  bookDisplay.style.display = 'block';
  formDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
};

export const displayAdd = () => {
  bookDisplay.style.display = 'none';
  formDisplay.style.display = 'block';
  contactDisplay.style.display = 'none';
};

export const displayContact = () => {
  bookDisplay.style.display = 'none';
  formDisplay.style.display = 'none';
  contactDisplay.style.display = 'block';
};
