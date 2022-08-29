console.log("Hello World")
const bookForm = document.querySelector('#bookForm');
const bookInput = document.querySelector("#bookInput");

let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(userInput) {
    myLibrary.push(new Book(userInput)); // construct new book and push it to book array
    // console.log(myLibrary); //test library with a console log
}

bookForm.addEventListener('submit',(e) => {
    e.preventDefault();
    addBookToLibrary(bookInput.value);
    loopThroughLibrary(); // test loop
});


// loop through array of books 
function loopThroughLibrary() {
    for (i in myLibrary) {
        console.log(myLibrary[i].title);
    }
}
// display them on the page (add element for each book)