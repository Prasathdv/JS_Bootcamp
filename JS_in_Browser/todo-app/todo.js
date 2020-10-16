// This is notes app generated using objects, arrays, functions, localstorage concepts

// Declare an empty todo array
const todo = getSavedTodo()

// create a empty filterTodo object
const filters = {
    todoFilterQuery: '',
    hideCompleted : false
}

renderTodo(todo,filters)

// Listen to filter todo event
document.querySelector('#todo-filter').addEventListener('input', function (e){
    filters.todoFilterQuery = e.target.value
    renderTodo(todo,filters)
})
// Listen to add new todo event in form element
document.querySelector('#todoForm').addEventListener('submit', function (e) {
    e.preventDefault() 
    todo.push({
        text: e.target.elements.todoName.value,
        completed: false
    })
    saveTodo(todo)
    renderTodo(todo,filters)
    e.target.elements.todoName.value = ''
})

// Listen to hidecompleted checkbox event
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todo, filters)
})