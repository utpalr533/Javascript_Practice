// Get the html elements
// const taskform = document.getElementById('#taskform')
// const taskinput = document.getElementById('#tastinput')
// const tasklist = document.getElementById('#tasklist')

// //create a task counter

// let taskId = 1;
// // Function to add a task
// function addTask(event) {
//     event.preventDefault(); // Prevent form submission
//     const tasktext = taskinput.value.trim();


//     if (tasktext !== "") {
//         const taskitem = document.createElement('li');
//         taskitem.innerHTML =`<span>${tasktext}</span><button class ='delete-btn'>Delete</button>`;        
//         tasklist.append(taskitem);
//         taskinput.value = ""; // Clear the input field
//         taskId++;             // Add event listener to the delete button

//     const deleteBtn = taskitem.querySelector('.delete-btn');
//     deleteBtn.addEventListener('click', deletetask); 
//        }
//     }
//     function deletetask(event) {}

// // } function deleteTask(event) {

// // }

const taskinput = document.querySelector('#taskinput');
const tasklist = document.querySelector('#tasklist');
const form = document.querySelector('#taskForm');

//form.addEventListener('submit', addTask);


let taskId = 1;

function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const tasktext = taskinput.value.trim();

    if (tasktext !== "") {
        const taskitem = document.createElement('li');
        taskitem.innerHTML = `<span>${tasktext}</span><button class="delete-btn">Delete</button>`;
        tasklist.append(taskitem);

        taskinput.value = ""; // Clear input field
        taskId++;

        const deleteBtn = taskitem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskitem.remove();
        });
    }
}

function deleteTask(event) {

    const taskitem=event.target.parentElement;
    console.log(taskitem);
    tasklist.removeChild(taskitem);
}




//add event listener to the form

taskform.addEventListener('submit', addTask);