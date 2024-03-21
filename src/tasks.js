import { displayOrganizedProjects } from "./sidebar";
export let taskList = [];

export function displayAllTasks(storedTaskList) {
  // query selectors for containers"
  const taskContentContainer = document.querySelector(".taskContentContainer");
  const completedTaskContainer = document.querySelector(
    ".completedTaskContainer",
  );
  // creates task display container and adds a class
  const taskDisplayContainer = document.createElement("div");
  taskDisplayContainer.classList.add("taskDisplayContainer");
  // when the page loads if there is a stored task list it will get it and display it
  document.addEventListener("DOMContentLoaded", function () {
    if (storedTaskList.length !== 0) {
      displayChosenTaskList(storedTaskList);
      // displays tasks again in side bar so marking as complete properly works
      displayOrganizedProjects();
    } else {
      console.log("ELSE");
    }
  });
  // inserts the task display container before the completed task container
  taskContentContainer.insertBefore(
    taskDisplayContainer,
    completedTaskContainer,
  );
  // this is called when a new task is created
  displayChosenTaskList(taskList);
}

// this function will display either the task from local storage or it will update when a new task is created and display the new array
function displayChosenTaskList(sentList) {
  const taskDisplayContainer = document.querySelector(".taskDisplayContainer");
  // each task gets its own container and is appended to a container that is added to the DOM
  if (sentList !== "[]") {
    sentList.forEach((task) => {
      if (!task.completed == true) {
        const taskUnit = document.createElement("div");
        const taskTitle = document.createElement("p");
        taskTitle.innerText = task.title;
        taskUnit.classList.add("taskUnit");
        // adds a data-index-num attribute to the div
        taskUnit.dataset.indexNum = task.indexNum;
        taskUnit.append(makeCompleteBtn(), taskTitle);
        taskDisplayContainer.prepend(taskUnit);
      }
    });
  }
  // sets the content of taskList to whichever list was sent
  taskList = sentList;
}

// makes button that when clicked it will mark the task as completed
function makeCompleteBtn() {
  const button = document.createElement("button");
  button.classList.add("completeTaskBtn");
  button.addEventListener("click", completeTask);
  return button;
}

function completeTask(e) {
  const completedTaskContainer = document.querySelector(
    ".completedTaskContainer",
  );
  // appends the completed task to the completed task container
  completedTaskContainer.append(e.target.parentNode);
  // sends completed task index num to add the true value to completed on the object
  setCompleteOnObject(e.target.parentNode.getAttribute("data-index-num"));
  e.target.parentNode.querySelector("p").classList.add("lineThroughText");
  e.target.disabled = true;
  removeCompletedTasks(e.target.parentNode.getAttribute("data-index-num"));
  crossOutInSidebar(e.target.parentNode.getAttribute("data-index-num"));
}

// this function is called when the user marks a task as completed, it then adds a line through text in the side bar
export function crossOutInSidebar(completedIndex) {
  console.log(completedIndex);
  const sidebarContainerBottom = document.querySelectorAll(
    ".sidebarContainerBottom > section > div",
  );
  sidebarContainerBottom.forEach((div) => {
    if (completedIndex === div.getAttribute("data-index-num")) {
      div.classList.add("lineThroughText");
    }
  });
}

// when the user clicks on the complete task button this function will be called to removed the stored item from the task list
function removeCompletedTasks(removedIndex) {
  let storedTaskList = JSON.parse(localStorage.getItem("storedTaskList"));
  let newStoredTaskList = storedTaskList.filter((obj) => {
    return obj.indexNum != removedIndex;
  });
  localStorage.setItem("storedTaskList", JSON.stringify(newStoredTaskList));
}

// checks for a match between completed index and marks it as true on the object
function setCompleteOnObject(completedIndex) {
  taskList.forEach((task) => {
    if (task.indexNum == completedIndex) {
      task.completed = "true";
    }
  });
}

function reAddEventListeners() {
  document.querySelectorAll(".completeTaskBtn").forEach((button) => {
    button.addEventListener("click", completeTask);
  });
}
reAddEventListeners();
