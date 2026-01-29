// Array to store books
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = this.read;
    this.id = crypto.randomUUID() 
}

function addBookToLibrary(title, author, pages, read) {
    // new keyword
    const newBook = new Book(title, author, pages, read);
    // Push to the array
    myLibrary.push(newBook);
}

// Write a function that loops thorugh the arrray and display each book
function displayBooks() {
    
    // Card will lie in this container
    const container = document.querySelector(".library-container");
    container.innerHTML = ""; // wipe it
    
    // Loop through array
    myLibrary.forEach( (book) => {

        // Create main card and div
        const bookCard = document.createElement("div"); // Create a new div
        bookCard.classList.add("book-card"); // Add 'book-card' class

        // elements
        const titleElement = document.createElement("p");
        titleElement.textContent = book.title;
        const authorElement = document.createElement("p");
        authorElement.textContent = book.author;
        const pagesElement = document.createElement("p");
        pagesElement.textContent = book.pages;

        // Read status button
        const readButton = document.createElement("button");
        readButton.textContent = book.read ? "Read" : "Not Read";
        readButton.classList.add(book.read ? "read-style" : "not-read-style"); // Add 'read-style' or 'not-read-style' class

        //Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.dataset.id = book.id // assign book ID to button. 

        // append to card
        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);

        // put card in the library container
        container.appendChild(bookCard);


    });
}

// Call function
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
displayBooks();
console.log(myLibrary);