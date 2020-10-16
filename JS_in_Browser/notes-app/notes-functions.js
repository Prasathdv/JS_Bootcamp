//  This module contains all reusable functions from notes main module. This is for refactoring code for more readability & reusability

// Function call to read existing notes from localstorage
const getSavedNotes = function (){
    const dataJSON = localStorage.getItem('notes')
    // Check if data present in local storage
    //  If value found , save it in notes array.
    //  If value not found , retrun empty array.
    if(dataJSON !== null){
        return JSON.parse(dataJSON)
    } else {
        return []
    }
}

// Function call to save the notes in local storage
const saveNotes = function (notes){
    return localStorage.setItem('notes', JSON.stringify(notes))
}
// Function call to generate notes DOM element

const generateNoteDOM = function (note){
    console.log(note.title);
    let noteElement = document.createElement('p')
        if(note.title.length > 0){
            noteElement.textContent = note.title
        }else{
            noteElement.textContent = 'Unnamed Note'
        }
        return noteElement
}

// Create a function to render the text based on the filter input
const renderText = function (notes, filters){
    console.log(notes);
    console.log(filters);
    const filteredText = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.queriedText.toLowerCase())
    })
    // To clear the text rendering for the filtered search
    document.querySelector('#notes').innerHTML = ''
    // To create p element based on the search list
    filteredText.forEach(function (note){
        const noteElements = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElements)
    })
}