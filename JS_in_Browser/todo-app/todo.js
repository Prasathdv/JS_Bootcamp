const todo = [
    {text: 'JavaScript Learning',completed:true},
    {text: 'NodeJs Learning', completed:true},
    {text: 'React Native Learning', completed:false},
    {text: 'Tailwind CSS Learning', completed:false},
    {text: 'JS Datastructures Learning',completed:false}
]

// create a empty filterTodo object
const filters = {
    todoFilterQuery: ''
}

// Render todo function
const renderTodo = function (todo,filters){
    const filteredTodo = todo.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.todoFilterQuery.toLowerCase())
    })
    // Print - You have 2 Todos left (false) P element
    const todoFilter = filteredTodo.filter (function (todos) {
        return !todos.completed
    })

    document.querySelector('#todo').innerHTML = ''

    const statusElement = document.createElement('h3')
    statusElement.textContent = `You have ${todoFilter.length} Todos left`
    document.querySelector('#todo').appendChild(statusElement)

    // Add a P element for each todo above (use only text)
    filteredTodo.forEach(function (todo){
    let todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    document.querySelector('#todo').appendChild(todoElement)
    })
}

renderTodo(todo,filters)

// Listen to add todo event
document.querySelector('#add-todo').addEventListener('click',function (e) {
    console.log('Todo has been added!');
})
// Listen to remove todo event
document.querySelector('#remove-todo').addEventListener('click',function (e){
    document.querySelectorAll('.todo').forEach(function (todo) {
        todo.remove()
    })
})
// Listen to add new todo event
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);
})
// Listen to filter todo event
document.querySelector('#todo-filter').addEventListener('input', function (e){
    filters.todoFilterQuery = e.target.value
    renderTodo(todo,filters)
})