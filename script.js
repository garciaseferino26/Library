// Select the div containing the cards (main-left)
const container = document.querySelector('.main-left');

// select button for adding to Library and input boxes to use 
const title = document.querySelector(".title-opt");
const author = document.querySelector(".author-opt");
const pages = document.querySelector(".pages-opt");
const check = document.querySelector(".check-opt");
const add_button = document.querySelector('button');


// use an array to store the book objects
let myLibrary = [];

// defines what a book object is
function Book(title, author, pages, check) {
    this.title = title
    this.author = author
    this.pages = pages
    this.check = check
}

// this function will make sure that the input fields are not empty (only the first three not the checkbox)
function isValid(thing) {
    if((thing.value === "" || thing.value === 'false')){
        return false;
    }   else {
        return true;
    }
}

// returns yes or no depending on the checkbox
function isChecked(thing) {
    if(thing.checked === true){
        return 'Yes'
    } else {
        return 'No'
    }
}

// var pickle = new Book('sefa', 'gar', 9, 'Yes')
// var mango = new Book('orange', 'candy', 8, 'No')
// var banana = new Book('astros', 'houston', 4, 'Yes')
// var lime = new Book('soccer', 'foot', 149, 'Yes')
// console.log(pickle, "first print")
// myLibrary.push(pickle, mango, banana, lime)
// console.log(myLibrary, "full library books")
// console.log(myLibrary.slice(myLibrary.length - 1))
// console.log(myLibrary[0].title)
// console.log(myLibrary[0].author)
// console.log(myLibrary[0].pages)
// console.log(myLibrary[0].check)
// console.log(myLibrary[1].check)

// will call Book function on the user inputs to store the book boject in our simple array
function addBookToLibrary() {
    if (isValid(title) && isValid(author) && isValid(pages)) {
        var book = new Book(title.value, author.value, pages.value, isChecked(check))
        myLibrary.push(book)
    } else {
        alert('field(s) is/are empty, try again.')
    }
}

// function to traverse teh myLibary array and build a book card to display on the page
function createBook() {
    // assign a const var to .main-left
    const libraryShelf = document.querySelector('.main-left');
    // assign a const var to hold each creation of a new book and give it a class
    const newBook = document.createElement('div');
    newBook.classList.add('books-card');

    // select last book in array in order to add it to the DOM
    var currentBook = myLibrary.slice(myLibrary.length - 1);
    console.log(currentBook, 'last added book to array')
    console.log(currentBook[0].title, typeof (currentBook[0].title) === 'string')
    console.log(currentBook[0].author, typeof (currentBook[0].author) === 'string')
    console.log(currentBook[0].pages, typeof (currentBook[0].pages) === 'string')
    console.log(currentBook[0].check, typeof (currentBook[0].check) === 'string')

    // create var for title and add it
    var bookName = document.createElement('h1');
    bookName.innerHTML = currentBook[0].title;
    newBook.appendChild(bookName);

    //create var for author and add it
    var bookAuthor = document.createElement('h3');
    bookAuthor.innerHTML = currentBook[0].author;
    newBook.appendChild(bookAuthor);

    //create var for pages and add it
    var bookPages = document.createElement('h3');
    bookPages.innerHTML = currentBook[0].pages;
    newBook.appendChild(bookPages);

    //create var for hasRead and add it 
    var hasRead = document.createElement('h3');
    hasRead.innerHTML = isChecked(check);
    newBook.appendChild(hasRead);

    libraryShelf.appendChild(newBook);
}

// when clicking the button add the info to the array and then erase all fields
add_button.addEventListener('click', function() {
    addBookToLibrary()
    console.log("we added to library (from event listener)")
    createBook()
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
    console.log(myLibrary.length, "this is how long the library is")
})

// // add books to Library
// add_button.addEventListener('click', function() {
//     if (isValid(title) && isValid(author) && isValid(pages)) {
//         // console.log('top three valid', " and ", isChecked(check))
//         console.log(title.value, author.value, pages.value, isChecked(check))

//         const libraryShelf = document.querySelector('.main-left');
//         const newBook = document.createElement('div');
//         newBook.classList.add('books-card');

//         //create var for title and add it
//         var bookName = document.createElement('h1');
//         bookName.innerHTML = title.value;
//         newBook.appendChild(bookName);

//         //create var for author and add it
//         var bookAuthor = document.createElement('h3');
//         bookAuthor.innerHTML = author.value;
//         newBook.appendChild(bookAuthor);

//         //create var for pages and add it
//         var bookPages = document.createElement('h3');
//         bookPages.innerHTML = pages.value;
//         newBook.appendChild(bookPages);

//         //create var for hasRead and add it 
//         var hasRead = document.createElement('h3');
//         hasRead.innerHTML = isChecked(check);
//         newBook.appendChild(hasRead);

//         //add new book  to Library
//         libraryShelf.appendChild(newBook);
//         title.value = "";
//         author.value = "";
//         pages.value = "";
//         check.checked = false;


//     } else {
//         alert('field(s) is/are empty, try again.')
//     }
//     // console.log(typeof title.value, title.value, title.value === '');
//     // console.log(typeof author.value, author.value, author.value === '');
//     // console.log(pages.value === 'null', "whats the value> ->", pages.value,"is it an empty string ->", pages.value === '');
//     // console.log(check.checked === true);

// });