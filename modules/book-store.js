export default class Bookstore {
  constructor() {
    this.BooksContainer = document.querySelector('.booksDisplay');
    this.bookTitle = document.querySelector('#Title');
    this.bookAuthor = document.querySelector('#Author');
    this.bookLibrary = [];
    this.addBook = this.addBook.bind(this);
  }

  // displays already added books to storage
  storedLocal() {
    if (localStorage.getItem('books') == null) {
      localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    }

    const store = localStorage.getItem('books');
    if (store) {
      this.bookLibrary = JSON.parse(store);
    }
  }

  // remove book
  removeBook(index) {
    this.bookLibrary = this.bookLibrary.filter(
      (book, bookIndex) => bookIndex !== index
    );
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));

    this.createLibrary();
  }

  // create a new book display
  createLibrary() {
    this.BooksContainer.innerHTML = '';
    this.bookLibrary.forEach((book, index) => {
      const bookContainer = document.createElement('div');
      bookContainer.innerHTML = `
        <div class='book-list-container'>
          <div class='wrap'>
            <div>
                <p>${book.titleBook}</p>
                <p> ${book.authorBook}</p>
            </div>
            <div class='removeBtn' id='removeBtn'>
            </div>
          </div>
        </div>
        `;

      const removeBtnDiv = document.getElementById('removeBtn');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';

      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      removeButton.classList.add('delete');
      bookContainer.appendChild(removeButton);
      this.BooksContainer.appendChild(bookContainer);
    });
  }

  // take in and stores new book in local storage
  addBook(e) {
    e.preventDefault();
    const titleBook = this.bookTitle.value;
    const authorBook = this.bookAuthor.value;
    const newBooks = { titleBook, authorBook };

    this.bookLibrary.push(newBooks);
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));

    this.createLibrary();

    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}
