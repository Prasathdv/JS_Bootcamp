// Declare an notes array
const notes = [{
    title: 'Learning Goal',
    body: 'Completed learning about JS Arrays and its methods'
},{
    title: 'Plan for a trip',
    body: 'Plan for a trip to any south TN location'
},{
    title: 'Be fit',
    body: 'Do excercise regularly to keep your body fit'
},{
    title: 'Read Books',
    body: 'Read good books to get yourself motivated.'
},{
    title: 'Career Plan',
    body: 'Plan for new company shift'
}
]
// initialize an empty object for capturing the query input from user for finding notes.
const filters = {
    queriedText : ''
}

// Create a function to render the text based on the filter input
const renderText = function (notes, filters){
    const filteredText = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.queriedText.toLowerCase())
    })
    // To clear the text rendering for the filtered search
    document.querySelector('#notes').innerHTML = ''
    // To create p element based on the search list
    filteredText.forEach(function (filter){
        let noteElement = document.createElement('h5')
        noteElement.textContent = filter.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}
// To render intial screen before filtering
renderText(notes,filters)

document.querySelector('#add-notes').addEventListener('click', function(e) {
    e.target.textContent = 'Notes added!'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#filter-notes').addEventListener('input', function (filterText){
    filters.queriedText = filterText.target.value
    renderText(notes,filters)
    })