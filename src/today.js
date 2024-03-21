import { makeNewTask } from "./new-task.js";
import { taskList } from "./tasks.js";
import { crossOutInSidebar } from "./tasks.js";

export function loadTodayPage() {
  // gets main content container
  const mainContent = document.querySelector("#mainContent");
  // removes classes from main content
  mainContent.className = "";
  // adds today class to main content
  mainContent.classList.add("todayPage");
  // resets main content so duplicate elements dont appear
  mainContent.innerHTML = "";
  // adds new task button back
  makeNewTask();
  // creates container for content
  const taskContentContainer = document.createElement("div");
  taskContentContainer.classList.add("taskContentContainer");
  // creates complete task container
  const completedTaskContainer = document.createElement("div");
  completedTaskContainer.classList.add("completedTaskContainer");
  // appends items to correct containers
  taskContentContainer.append(makeTitle(), completedTaskContainer);
  mainContent.append(taskContentContainer);
  displayTodaysTasks();
}

// makes title for today page
function makeTitle() {
  const h2 = document.createElement("h2");
  h2.classList.add("todayTitle");
  h2.innerText = "Today";
  return h2;
}

export function displayTodaysTasks() {
  const taskContentContainer = document.querySelector(".taskContentContainer");
  const completedTaskContainer = document.querySelector(
    ".completedTaskContainer",
  );
  const taskDisplayContainer = document.createElement("div");
  taskDisplayContainer.classList.add("taskDisplayContainer");

  const todayDate = new Date();
  taskList.forEach((task) => {
    let dayOnly = task.date.replace(
      `${todayDate.getFullYear()}-${checkMonthForZero()}-`,
      "",
    );
    if (dayOnly == todayDate.getDate() && !task.completed == true) {
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
  taskContentContainer.insertBefore(
    taskDisplayContainer,
    completedTaskContainer,
  );
}

function checkMonthForZero() {
  const now = new Date();
  if (now.getMonth() >= 0 && now.getMonth() < 10) {
    return `0${now.getMonth() + 1}`;
  } else {
    return `${now.getMonth() + 1}`;
  }
}

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
