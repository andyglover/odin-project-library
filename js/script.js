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
        deleteButton.innerHTML=
            `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>`
        deleteButton.setAttribute("title", "remove book from library");
        deleteButton.setAttribute("data-index", i);
        deleteButton.addEventListener('click',(e) => {
            myLibrary.splice(deleteButton.getAttribute("data-index"), 1);
            loopThroughLibrary();
        });
        //create toggle read button
        const toggleReadButton = document.createElement("button");
        toggleReadButton.setAttribute("data-index", i);
        if(myLibrary[toggleReadButton.getAttribute("data-index")].read == "Read"){
            toggleReadButton.innerHTML=
            `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z" />
        </svg>`;
        toggleReadButton.setAttribute("title", "set to \"Unread\"");
        }
        else if(myLibrary[toggleReadButton.getAttribute("data-index")].read == "Unread")
        {
            toggleReadButton.innerHTML=
            `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" />
        </svg>`
            toggleReadButton.setAttribute("title", "set to \"Read\"");
        }
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
    let examples = []; 
    examples[0] = Array("Harry Potter and the Sorcerer's Stone","J.K. Rowling","309","Unread");
    examples[1] = Array("The Hunger Games","Suzanne Collins","374","Unread");
    examples[2] = Array("Twilight","Stephenie Meyer","498","Unread");
    examples[3] = Array("To Kill A Mockingbird","Harper Lee","336","Unread");
    examples[4] = Array("The Great Gatsby","F. Scott Fitzgerald","180","Unread");
    examples[5] = Array("The Fault in Our Stars","John Green","313","Unread");
    examples[6] = Array("1984","George Orwell","328","Unread");
    examples[7] = Array("Pride and Prejudice","Jane Austen","279","Unread");
    examples[8] = Array("The Hobbit","J.R.R. Tolkien","366","Unread");
    examples[9] = Array("The Diary of a Young Girl","Anne Frank","283","Unread");
    examples[10] = Array("Triptych","Karin Slaughter","393","Unread")
    examples[11] = Array("Fractured","Karin Slaughter","388","Unread")
    examples[12] = Array("Undone","Karin Slaughter","436","Unread")
    let randomExample = Math.floor(Math.random() * examples.length);
    addBookToLibrary(examples[randomExample][0],examples[randomExample][1],examples[randomExample][2],examples[randomExample][3]);
    loopThroughLibrary();
})
