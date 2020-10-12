const todo = [
    {text: 'JavaScript Learning',completed:true},
    {text: 'NodeJs Learning', completed:true},
    {text: 'React Native Learning', completed:false},
    {text: 'Tailwind CSS Learning', completed:false},
    {text: 'JS Datastructures Learning',completed:false}
]
// Print - You have 2 Todos left (false) P element
const todoFilter = todo.filter (function (todos) {
        return !todos.completed
    })
const statusElement = document.createElement('h3')
statusElement.textContent = `You have ${todoFilter.length} Todos left`
document.querySelector('body').appendChild(statusElement)

// Add a P element for each todo above (use only text)
todo.forEach(function (todo){
    let todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    todoElement.classList = 'todo'
    document.querySelector('body').appendChild(todoElement)
})

// Add eventlistener for button click event
document.querySelector('#add-todo').addEventListener('click',function (e) {
    console.log('Todo has been added!');
})

document.querySelector('#remove-todo').addEventListener('click',function (e){
    document.querySelectorAll('.todo').forEach(function (todo) {
        todo.remove()
    })
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);
})