// Declare an empty notes array
const notes = getSavedNotes()
// initialize an empty object for capturing the query input from user for finding notes.
const filters = {
    queriedText : ''
}
// To render intial screen before filtering
renderText(notes,filters)

// Listen to add new notes event
document.querySelector('#notes-add').addEventListener('submit', function(e) {
    e.preventDefault() 
    // Add new note
    notes.push({
        title: e.target.elements.notesTitle.value,
        body: 'default Text'
    })
    // add the JSON to local storage
    saveNotes(notes)
    renderText(notes, filters)
    e.target.elements.notesTitle.value = ''
})
// Listen to sort notes event
document.querySelector('#sort-text').addEventListener('change', function (e){
    console.log(e.target.value)
})
// Listen to filter notes event
document.querySelector('#filter-notes').addEventListener('input', function (e){
    filters.queriedText = e.target.value
    renderText(notes, filters)
})