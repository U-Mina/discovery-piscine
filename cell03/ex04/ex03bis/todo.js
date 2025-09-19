// main change is in syntax and grammar
// $(document).ready() <== DOMContentLoaded
// $('#Id') <== document.getElementById('id')
// $('.class') <== document.querySelectorAll('.class');
// each() <== forEach()
// textContent() <== text()
// .on('click', ...) <== addEventListener()

$(document).ready(function() {
    
    const newButton = $('#newButton');
    // const newButton = document.getElementById('newButton');

    const todoDiv = $('#ft_list');

    function savaTodo() {
        const tasks = [];
        // const todoElements = $('.todo');

        $('.todo').each(function() {
            tasks.push($(this).text());
        });

        const tasksJson = JSON.stringify(tasks);

        document.cookie = "todoList=" + tasksJson;
    }

    function creteTodo(taskText) {
        // whole function on one line =: create ele and prepend
        todoDiv.prepend('<div class="todo">' + taskText + '</div>');
    }

    // no cookie handling in jquery
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

    // on click happen in #ft_list, if the add is '.todo' ele, go function()
    todoDiv.on('click', '.todo', function() {
        if (confirm('Are you sure you want to DELETE this todo?')) {
            $(this).remove();
            savaTodo();
        }
    });

    // .on('click', ...) <== addEventListener()
    newButton.on('click', function() {
        const textWidow = prompt("Your new To-do: ");

        if (textWidow !== null && textWidow.trim() !== '') {
            creteTodo(textWidow.trim());
            savaTodo();
        }
    });

    loadTodo();
});
