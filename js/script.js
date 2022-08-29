console.log("Hello World")

let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(userInput) {
    new Book(userInput);
}

//define userinput from an input on the page.

//loop through array of books and display them on the page
//  add element for each book.