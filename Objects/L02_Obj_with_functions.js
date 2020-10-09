// This module uses the objects as function arguments

let myBook = {
    title:'Animal Farm',
    author:'George Orwell',
    pageCount:326
}

let otherBook = {
    title:'Tale of two cities',
    author:'Charles Dickens',
    pageCount: 341
}

let bookRead = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.` 
    }
}

let book1 = bookRead(myBook)
let book2 = bookRead(otherBook)

console.log(book1);
console.log(book2);