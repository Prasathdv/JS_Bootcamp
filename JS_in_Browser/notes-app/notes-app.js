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
}]

document.querySelector('#add-notes').addEventListener('click', function(e) {
    e.target.textContent = 'Notes added!'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(function (note) {
        note.remove()
    })
})