class Book {
  #title;
  #author;
  #publishYear;
  constructor(title, author = "Anonymous", publishYear = "no-data") {
    this.#title = title;
    this.#author = author;
    this.#publishYear = publishYear;
  }

  showDetails() {
    return `Tytuł: ${this.#title}, author: ${this.#author}, data wydania: ${this.#publishYear}.`;
  }
}

// const book = new Book("Między Bogiem, a prawdą.", "Anonymous", "2022");

class Library {
  #bookCollection;
  constructor() {
    this.#bookCollection = new Map(); //klucz wartość;
    this.init();
  }
  // Elementy uruchomieniowe;
  init() {
    document
      .getElementById("addBook")
      .addEventListener("click", () => this.#addBook());

    document
      .getElementById("searchBook")
      .addEventListener("click", () => this.#searchBook());
  }

  #addBook() {
    const title = document.getElementById("title").value.toLowerCase();
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    const newBook = new Book(title, author, date);
    3;
    this.#bookCollection.set(title, newBook);

    alert("Książka została dodana do kolekcji.");
    console.log(this.#bookCollection);
  }

  #searchBook() {
    const title = document.getElementById("searchTitle").value.toLowerCase();
    const resultPanel = document.getElementById("searchResult");
    const book = this.#bookCollection.get(title);
    if (book) {
      let output = "<ul>";
      output += `</li>${book.showDetails()}`;
      resultPanel.innerHTML = output + "</li></ul>";
    } else {
      alert("Nie mamy takiej książki w kolekcji.");
    }
  }
}

const library = new Library();
