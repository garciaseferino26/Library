// Select the div containing the cards (main-left)
const container = document.querySelector('.main-left');

// add books to Library

// select button for adding to Library and input boxes to use 
const title = document.querySelector(".title-opt");
const author = document.querySelector(".author-opt");
const pages = document.querySelector(".pages-opt");
const check = document.querySelector(".check-opt");
const add_button = document.querySelector('button');

function isValid(thing) {
    if((thing.value === "" || thing.value === 'false') && (pages.value === '' || pages.value === 'false')){
        return false;
    }   else {
        return true;
    }
}

function isChecked(thing) {
    if(thing.checked === true){
        return 'Yes'
    } else {
        return 'No'
    }
}

add_button.addEventListener('click', function() {
    if (isValid(title) && isValid(author) && isValid(pages)) {
        // console.log('top three valid', " and ", isChecked(check))
        console.log(title.value, author.value, pages.value, isChecked(check))
        const libraryShelf = document.querySelector('.main-left');
        const newBook = document.createElement('div');
        newBook.classList.add('books-card');

        //create var for title and add it
        var bookName = document.createElement('h1');
        bookName.innerHTML = title.value;
        newBook.appendChild(bookName);

        //create var for author and add it
        var bookAuthor = document.createElement('h3');
        bookAuthor.innerHTML = author.value;
        newBook.appendChild(bookAuthor);

        //create var for pages and add it
        var bookPages = document.createElement('h3');
        bookPages.innerHTML = pages.value;
        newBook.appendChild(bookPages);

        //create var for hasRead and add it 
        var hasRead = document.createElement('h3');
        hasRead.innerHTML = isChecked(check);
        newBook.appendChild(hasRead);

        //add new book  to Library
        libraryShelf.appendChild(newBook);
        title.value = "";
        author.value = "";
        pages.value = "";
        check.checked = false;


    } else {
        alert('field(s) is/are empty, try again.')
    }
    // console.log(typeof title.value, title.value, title.value === '');
    // console.log(typeof author.value, author.value, author.value === '');
    // console.log(pages.value === 'null', "whats the value> ->", pages.value,"is it an empty string ->", pages.value === '');
    // console.log(check.checked === true);

});