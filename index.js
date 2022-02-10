let todo = [];

function addTask() {
    const userTask = document.getElementById('userinput');
    if (userTask.value == "") {
        alert('Please enter To do task');
    }
    else {
        todo.push({
            task: userTask.value,
            isPending: true,
            isCompleted: false,
            isDeleted: false,
        })
        userTask.value = "";
    }
}

function allTask() {
    const unOrderedList = document.getElementById('list');
    unOrderedList.innerText = '';
    document.getElementById('alltask').style.backgroundColor = 'white';
    for (let i = 0; i < todo.length; i++) {
        const currentTask = todo[i].task;
        const taskItem = document.createElement('li');
        taskItem.style.marginTop = '1rem';
        taskItem.style.fontWeight = 'bold';
        taskItem.style.fontSize = '25px';
        taskItem.textContent = currentTask;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X"
        deleteButton.style.marginLeft = "2rem";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.color = 'white';
        deleteButton.addEventListener('click', () => {
            todo[i].isDeleted = true;
            todo[i].isPending = false;
            taskItem.remove();
        })

        const completeButton = document.createElement('button');
        completeButton.textContent = "Done"
        completeButton.style.marginLeft = "2rem";
        completeButton.style.backgroundColor = "Green";
        completeButton.style.color = 'white';
        completeButton.addEventListener('click', () => {
            todo[i].isCompleted = true;
            todo[i].isPending = false;
            taskItem.style.textDecoration = 'line-through';
        })

        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);
        unOrderedList.appendChild(taskItem);

    }
}

function deletedTask() {
    const unOrderedList = document.getElementById('list');
    unOrderedList.innerText = '';
    document.getElementById('alltask').style.backgroundColor = 'red';
    for (let i = 0; i < todo.length; i++) {
        const curretDeleteItem = todo[i].isDeleted;
        if (curretDeleteItem === true) {
            const deleteItem = document.createElement('li');
            deleteItem.style.fontWeight = 'bold';
            deleteItem.style.fontSize = '25px';
            deleteItem.style.margin = '1rem';
            deleteItem.textContent = todo[i].task;

            unOrderedList.appendChild(deleteItem);
        }
    }
}

function completedTask() {
    const unOrderedList = document.getElementById('list');
    unOrderedList.innerText = '';
    document.getElementById('alltask').style.backgroundColor = 'Green';
    for (let i = 0; i < todo.length; i++) {
        const currentCompleteItem = todo[i].isCompleted;
        if (currentCompleteItem === true) {
            const completeItem = document.createElement('li');
            completeItem.style.fontWeight = 'bold';
            completeItem.style.fontSize = '25px';
            completeItem.style.margin = '1rem';
            completeItem.textContent = todo[i].task;

            unOrderedList.appendChild(completeItem);
        }
    }
}


function pendingTask() {
    const unOrderedList = document.getElementById('list');
    unOrderedList.innerText = '';
    document.getElementById('alltask').style.backgroundColor = 'yellow';
    for (let i = 0; i < todo.length; i++) {
        const currentPendingItem = todo[i].isPending;
        if (currentPendingItem === true) {
            const pendingItem = document.createElement('li');
            pendingItem.style.fontWeight = 'bold';
            pendingItem.style.fontSize = '25px';
            pendingItem.style.margin = '1rem';
            pendingItem.textContent = todo[i].task;

            unOrderedList.appendChild(pendingItem);
        }
    }
}