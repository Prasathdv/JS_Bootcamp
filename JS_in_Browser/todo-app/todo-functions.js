//  This module contains all reusable functions from todo main module. This is for refactoring code for more readability & reusability.

// Function call to read existing todo from locl storage
const getSavedTodo = function () {
    const todoJSON = localStorage.getItem('todo')
    if(todoJSON !==null){
        return JSON.parse(todoJSON)
    }else {
        return []
    }
}

// Function call to save todo in local storage
const saveTodo = function (todo) {
    return localStorage.setItem('todo',JSON.stringify(todo))
}
// Function call to generate todo DOM element
const generateTodoDOM = function (todo){
    let todoElement = document.createElement('p')
     if(todo.text.length >0){
         todoElement.textContent = todo.text
     }else{
         todoElement.textContent = 'Unnamed'
     }
     return todoElement
}

// Render todo function
const renderTodo = function (todo,filters){
    console.log(todo);
    console.log(filters);
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
        const todoElement = generateTodoDOM(todo)
        document.querySelector('#todo').appendChild(todoElement)
     })
}