// This program is a note taking app using Array concepts.
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ******************************************************************************************************
// Array methods used:
//     1. push      : To add an new element at end of an array
//     2. pop       : To remove an element at end of an array
//     3. shift     : To remove an element at beginning of an array
//     4. unshift   : To add an new element at beginning of an array 
//     5. splice    : To remove/add any items based on index
//     6. forEach   : To loop through each item in an array
//     7. indexOf   : To find the index of given item of an array. 
//     8. findIndex : To find the index of an given item of array of objects
//     9. find      : To find the first value of an array.
//    10. filter    : To filter out given search string out of an array.
//    11. sort      : To sort the given array based on given order.
// ******************************************************************************************************
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

// sort the array using sort method
const sortNotes = function (notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if (b.title.toLowerCase < a.title.toLowerCase()) {
            return 1
        } else{
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


sortNotes(notes)
console.log(notes);
// const note = findNotes(notes, 'to')
// console.log(note);

