// Declaring Getter Functions
// calling on the document object to retrieve whatever element was classified under the specified id

const buttonsDiv = () => document.getElementById("buttons")
const showTasksButton = () => document.getElementById("show-tasks")
const listDiv = () => document.getElementById("list")
const ulTasksList = () => document.getElementById("tasks-lists")


// Events

//DOMContentLoaded => when the DOM finishes loading, listen for the specified events 

document.addEventListener("DOMContentLoaded", () => {
    // anonymous function
    showTasksButton().addEventListener("click", handleClick)
    // handleClick is a callback function so we do not invoke the function; we will use it later! 

})

const handleClick = () => {
    // Arrow function => 
    // Fetch requests return Promises
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    // parse the response body into JSON friendly format => array
    .then(json => renderTasks(json))
    // pass the whole array to the function renderTasks to iterate each task
    .catch(error => console.log("Error!!!"))
}

const renderTasks = (tasks) => {
    tasks.forEach(element => {
        // calling forEach on tasks array 
        // element = current element
        const li = document.createElement("li")
        // declaring and assigning a variable
        // storing the created Element inside the variable
        li.innerHTML = `
            <h2 class="task-name">${element.name}</h2>
        `
    })
}