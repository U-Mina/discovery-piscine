document.addEventListener('DOMContentLoaded', function() {
    
    const newButton = document.getElementById('newButton');
    const todoDiv = document.getElementById('ft_list');

    function savaTodo() {
        const tasks = [];
        const todoElements = document.querySelectorAll('.todo');

        todoElements.forEach(function(todoEle) {
            tasks.push(todoEle.textContent);
        });

        const tasksJson = JSON.stringify(tasks);

        document.cookie = "todoList=" + tasksJson;
    }

    function creteTodo(taskText) {
        const newTodoDiv = document.createElement('div');

        // add to 'todo' class for style (the style in html)
        newTodoDiv.className = 'todo';
        newTodoDiv.textContent = taskText;
        todoDiv.prepend(newTodoDiv);
    }

    function loadTodo() {
        const ck = document.cookie.split(';');

        for (let cookie of ck) {
            if (cookie.trim().startsWith('todoList=')) {

                const tasksJson = cookie.trim().substring('todoList='.length);
                if (tasksJson) {
                    const tasks = JSON.parse(tasksJson)
                    tasks.forEach(creteTodo);
                }
                return ;
            }
        }
    }

    todoDiv.addEventListener('click', function(event) {

        if (event.target.className === 'todo') {
            if (confirm('Are you sure you want to DELETE this todo?')) {
                event.target.remove();
                // todoDiv.remove();
                savaTodo();
            }
        }
    });

    newButton.addEventListener('click', function() {
        const textWidow = prompt("Your new To-do: "); // pop-up text window on click

        if (textWidow !== null && textWidow.trim() !== '') {
            console.log('New todo added: ', textWidow.trim());
            creteTodo(textWidow.trim());
            savaTodo();
        }
    });

    loadTodo();
});

// NOTE" event: has an address (event.target) of where the 'clicl' comes from
// so ,we can tell is it from 'newButton' (add more todo), or from 'todo' -> to remove cur-todo
// event: parameter that the browser automatically gives to function whenever an event happens,
// so on: function(event), we are setting up a var to catch that package of information the browser sends