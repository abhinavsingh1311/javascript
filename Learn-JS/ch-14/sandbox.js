//local storage

const todos = [
    { text: 'Buy Bread', completed: true },
    { text: 'Go to Gym', completed: false }
];

// set local storage
localStorage.setItem('todos', JSON.stringify(todos));

// get local storage
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos);