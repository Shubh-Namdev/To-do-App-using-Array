const bodyElement=document.querySelector('body');
const mainDiv=document.getElementById('App');
mainDiv.style.width='500px';
mainDiv.style.height='750px';
mainDiv.style.backgroundColor='coral';
mainDiv.style.margin='2rem';

const todos=[];
let id=0;

function addToDo(todo){
    const todoObject={
        id:id,
        title:todo,
        completed:false,
        timeTaken:Math.ceil(Math.random()*100)
    }
    todos.unshift(todoObject);
    id++;
    updateTodoList();
}

const addButton=document.getElementById('add');
addButton.addEventListener('click',() =>{
    const userTask=document.getElementById('todo');
    if(!userTask.value)
    {
        alert('Please enter a to-do task');
    }
    else
    {
        addToDo(userTask.value);
    }
    userTask.value='';
})

function deleteTodo(todo){
    todos.splice(todo.id,1);
    updateTodoList();
}

function completeTodo(todo){
    todo.completed=true;
    updateTodoList();
}

function updateTodoList(arr){
    const todosArr=arr||todos;
    const listElement=document.getElementById('list');
    listElement.innerText='';
    for(let todo of todosArr){
        const item=document.createElement('li');
        item.textContent=todo.title;
        if(todo.completed)
        {
            item.style.textDecoration='line-through';
        }
        const deleteButton=document.createElement('button');
        deleteButton.textContent="Delete";
        deleteButton.addEventListener('click', () =>{
            deleteTodo(todo);
        })

        const completeButton=document.createElement('button');
        completeButton.textContent='Mark as complete';
        completeButton.addEventListener('click',() =>{
            completeTodo(todo);
        })

        item.appendChild(completeButton);
        item.appendChild(deleteButton);
        listElement.appendChild(item);
    }

    const timeTakenElement=document.getElementById('time');
    const totalTimeTaken=todosArr.reduce(function (previousResult, todo){
        return previousResult+todo.timeTaken;
    },0);
    timeTakenElement.textContent=totalTimeTaken;
}

function filterTodos(type){
    let filteredTodos=[];

    switch(type){
        case 'all': 
        filteredTodos=todos;
            break;
        case 'completed':
            filteredTodos=todos.filter((todo) =>{
                return todo.completed===true;
            });
            break;
        case 'pending':
            filteredTodos=todos.filter((todo) =>{
                return todo.completed===false;
            })
            break;
        default:
            break;
    }

    updateTodoList(filteredTodos);
}

(function listenToFilters(){
    const allButton=document.getElementById('all');
    const completedButton=document.getElementById('completed');
    const pendingButton=document.getElementById('pending');

    allButton.addEventListener('click', () =>{
        filterTodos('all')
    })

    completedButton.addEventListener('click', () =>{
        filterTodos('completed')
    })

    pendingButton.addEventListener('click', () =>{
        filterTodos('pending')
    })
})();

