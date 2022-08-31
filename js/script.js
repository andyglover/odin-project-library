const bookForm = document.querySelector('#bookForm');
const bookInputTitle = document.querySelector("#bookInputTitle");
const bookInputAuthor = document.querySelector("#bookInputAuthor");
const bookInputPages = document.querySelector("#bookInputPages");
const bookList = document.querySelector("#bookList");
const exampleButton = document.querySelector("#example")

let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggleRead = function() {
        if(this.read == "Read"){this.read="Unread";}
        else if(this.read == "Unread"){this.read="Read";}
    };
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read)); // construct new book and push it to book array
}

bookForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const bookInputRead = document.querySelector('[type=radio]:checked').value;
    addBookToLibrary(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead);
    bookForm.reset();
    loopThroughLibrary();
});

function loopThroughLibrary() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      } //remove old items so we can add them all again with the new one.
    for (i in myLibrary) {
        title = myLibrary[i].title;
        author = myLibrary[i].author;
        pages = myLibrary[i].pages;
        read = myLibrary[i].read;

        //create card
        const div = document.createElement('div');
        div.classList.add("bookCard")
        const p = document.createElement("p");
        p.innerText = `Title: ${title}\nAuthor: ${author}\n${pages} Pages\n${read}`;
        //create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText="delete";
        deleteButton.setAttribute("data-index", i);
        deleteButton.addEventListener('click',(e) => {
            myLibrary.splice(deleteButton.getAttribute("data-index"), 1);
            loopThroughLibrary();
        });
        //create toggle read button
        const toggleReadButton = document.createElement("button");
        toggleReadButton.innerText="toggle read/unread";
        toggleReadButton.setAttribute("data-index", i);
        toggleReadButton.addEventListener('click',(e)=>{
            myLibrary[toggleReadButton.getAttribute("data-index")].toggleRead();
            loopThroughLibrary();
        });
        //append elements
        div.appendChild(p);
        div.appendChild(toggleReadButton);
        div.appendChild(deleteButton);
        bookList.appendChild(div);
    }
}

exampleButton.addEventListener('click', (e)=>{
    addBookToLibrary("Example Book","Example Author",100,"Read");
    loopThroughLibrary();
})
