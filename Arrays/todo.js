// This module create a To-Do list using Array.
// Declare an To-Do array of objects
const todo = [
    {text: 'JavaScript Learning',completed:true},
    {text: 'NodeJs Learning', completed:true},
    {text: 'React Native Learning', completed:false},
    {text: 'Tailwind CSS Learning', completed:true},
    {text: 'JS Datastructures Learning',completed:false}
]

const sortTodo = function (todo) {
    todo.sort(function (a, b) {
        if(b.completed){
           return -1 
        } else if (!b.completed){
            return 1
        } else{
            return 0
        }
    })
}
const removeItem = function (todo, todoText) { 
    const index = todo.findIndex(function (item, index) {
        return item.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index > -1){todo.splice(index,1)}
}

const getThingsToDo = function (todo){
    return todo.filter(function (todos) {
            return !todos.completed
    })
}

sortTodo(todo)
console.log(todo);
// console.log(getThingsToDo(todo));
// // removeItem(todo , 'tailwind css learning')
// // console.log(todo);