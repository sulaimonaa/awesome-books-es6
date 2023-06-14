import Bookstore from './modules/book-store.js';
import getCurrentDate from './modules/time.js';
import {
  displayAdd,
  displayList,
  displayContact,
} from './modules/changeState.js';
// import { removeButton } from './modules/remove-book.js';

const displayDate = document.querySelector('.dateDisplay');

displayDate.innerHTML = getCurrentDate();

const objectOne = new Bookstore();

const showList = document.getElementById('showList');
const addNewBook = document.getElementById('addNewBook');
const showContact = document.getElementById('showContact');
const form = document.querySelector('form');
form.addEventListener('submit', objectOne.addBook);

showList.addEventListener('click', displayList);
addNewBook.addEventListener('click', displayAdd);
showContact.addEventListener('click', displayContact);
form.addEventListener('submit', displayList);

objectOne.storedLocal();
objectOne.createLibrary();
