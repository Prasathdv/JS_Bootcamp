const todo = [
    {text: 'JavaScript Learning',completed:true},
    {text: 'NodeJs Learning', completed:true},
    {text: 'React Native Learning', completed:false},
    {text: 'Tailwind CSS Learning', completed:false},
    {text: 'JS Datastructures Learning',completed:false}
]

// create a empty filterTodo object
const filters = {
    todoFilterQuery: '',
    hideCompleted : false
}
// Render todo function
const renderTodo = function (todo,filters){
       let filteredTodo = todo.filter(function (todo) {
           const searchTodoMatch = todo.text.toLowerCase().includes(filters.todoFilterQuery.toLowerCase())
           const hideCompletedMatch = !filters.hideCompleted || !todo.completed
           return searchTodoMatch && hideCompletedMatch
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
    
    renderTodo(todo,filters)
    e.target.elements.todoName.value = ''
})

// Listen to hidecompleted checkbox event
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todo, filters)
})