console.log("Hello World")
const bookForm = document.querySelector('#bookForm');
const bookInputTitle = document.querySelector("#bookInputTitle");
const bookInputAuthor = document.querySelector("#bookInputAuthor");
const bookInputPages = document.querySelector("#bookInputPages");
//add radio buttons too?

const bookList = document.querySelector("#bookList");

let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read)); // construct new book and push it to book array
    console.log(myLibrary); //test library with a console log
}

bookForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const bookInputRead = document.querySelector('[type=radio]:checked').value;
    addBookToLibrary(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead);
    loopThroughLibrary(); // test loop
    // console.log(bookInputRead);
});


// loop through array of books 
function loopThroughLibrary() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      } //remove old items so we can add them all again with the new one.
    for (i in myLibrary) {
        title = myLibrary[i].title;
        author = myLibrary[i].author;
        pages = myLibrary[i].pages;
        read = myLibrary[i].read;
        const p = document.createElement("p");
        p.innerText = `Title: ${title}\nAuthor: ${author}\n${pages} Pages\n${read}`;
        bookList.appendChild(p);
    }
}
// display them on the page (add element for each book)