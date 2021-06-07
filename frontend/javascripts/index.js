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
    //debugger
    fetch('http://localhost:3000/tasks')
    .then(resp => resp.json())
    // parse the response body into JSON friendly format => array
    .then(json => renderTasks(json))
    // pass the whole array to the function renderTasks to iterate each task
   // .catch(error => console.log("Error!!!"))
    .catch(handleError)
   //console.log(json)
}

const handleError = (error) => {
    console.log(error)
}

const renderTasks = (tasks) => {
    //console.log(data)
    Object.keys(tasks).forEach(function(element) {
        // calling forEach on tasks array 
        // element = current element
        const li = document.createElement("li")
        // declaring and assigning a variable; storing the created Element inside the variable
        li.innerHTML = `
            <h2 class="task-name">${element.name}</h2>
            <h4 class="task-date">${element.task_date}</h4>
            
        `
        console.log(tasks)
        //ulTasksList().appendChild(li)
    }); 
}

