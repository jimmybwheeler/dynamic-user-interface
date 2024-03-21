import { taskList } from "./tasks.js";
import { displayAllTasks } from "./tasks.js";
import { displayTodaysTasks } from "./today.js";
import { displayOrganizedProjects } from "./sidebar.js";
import { populateStorage } from "./local-storage.js";
import { storedTaskList } from "./local-storage.js";

export function makeNewTask() {
  const mainContent = document.querySelector("#mainContent");
  mainContent.append(makeNewTaskBtn());
}
export let indexNum = getIndexNum();

function getIndexNum() {
  let storedIndex = localStorage.getItem("indexNum");
  if (storedIndex != NaN || null || undefined) {
    return storedIndex;
  } else {
    return 0;
  }
}
getIndexNum();

function makeNewTaskBtn() {
  const newTaskBtn = document.createElement("button");
  newTaskBtn.classList.add("newTaskBtn");
  newTaskBtn.innerText = "+";
  // event listner to create new task container
  newTaskBtn.addEventListener("click", makeNewTaskContainer);
  return newTaskBtn;
}

export function makeNewTaskContainer() {
  const taskContainer = document.querySelector("#taskContainer");
  taskContainer.innerHTML = "";
  //makes container for new task info
  const newTaskContainer = document.createElement("div");
  newTaskContainer.setAttribute("id", "newTaskContainer");

  // append inputs to task container
  newTaskContainer.append(makeTaskInputs(), makeTaskButtons());

  // append the container to the display on the page
  taskContainer.append(newTaskContainer);
}

function makeTaskInputs() {
  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInput");
  taskInput.contentEditable = "true";
  return taskInput;
}

function makeTaskButtons() {
  const taskBtnContainer = document.createElement("div");
  taskBtnContainer.classList.add("taskBtnContainer");
  taskBtnContainer.append(
    makeDateAndTime(),
    makeProjectTypeContainer(),
    makeSaveTaskBtn(),
  );
  return taskBtnContainer;
}

function makeSaveTaskBtn() {
  const saveTaskBtn = document.createElement("button");
  saveTaskBtn.classList.add("saveTaskBtn");
  saveTaskBtn.innerText = "Save";
  saveTaskBtn.addEventListener("click", saveTask);
  return saveTaskBtn;
}

// makes the project type container with a drop down menu
function makeProjectTypeContainer() {
  // makes container
  const container = document.createElement("div");
  container.classList.add("projectTypeContainer");
  // makes button for user to click
  const dropDownBtn = document.createElement("div");
  dropDownBtn.classList.add("selectProjectType");
  dropDownBtn.innerText = "Select Project Type";
  dropDownBtn.addEventListener("click", displayDropDown);
  // makes drop down content and appends it to button
  dropDownBtn.append(makeProjectTypeDropDown());
  // appends button to container
  container.append(dropDownBtn);
  return container;
}

function displayDropDown() {
  const dropDownContainer = document.querySelector(".dropDownContainer");
  dropDownContainer.classList.toggle("show");
}

// makes the drop down container
function makeProjectTypeDropDown() {
  const dropDownContainer = document.createElement("div");
  dropDownContainer.classList.add("dropDownContainer");
  // makes personal project input and label
  const personalProject = document.createElement("label");
  const personalProjectRadio = document.createElement("input");
  personalProject.innerText = "Personal";
  personalProjectRadio.type = "radio";
  personalProjectRadio.value = "isPersonalProject";
  personalProjectRadio.name = "personalOrWorkProject";
  personalProject.append(personalProjectRadio);

  // makes work project input and label
  const workProject = document.createElement("label");
  const workProjectRadio = document.createElement("input");
  workProject.innerText = "Work";
  workProjectRadio.type = "radio";
  workProjectRadio.value = "isWorkProject";
  workProjectRadio.name = "personalOrWorkProject";
  workProject.append(workProjectRadio);

  dropDownContainer.append(personalProject, workProject);
  return dropDownContainer;
}

// sends selected project type to object or if non are checked sends as uncategorized
function getProjectType() {
  const projectType = document.querySelector(
    'input[name="personalOrWorkProject"]:checked',
  );
  if (projectType === null) {
    return "uncategorized";
  }
  return projectType.value;
}

// displays the date and time picker that the user can choose when to set task to be completed
function makeDateAndTime() {
  // makes container for label and input
  const container = document.createElement("div");
  container.classList.add("dateInputContainer");
  // makes label
  const dateTimeLabel = document.createElement("label");
  dateTimeLabel.innerText = "Set Due Date";
  // makes input
  const dateTimeInput = document.createElement("input");
  dateTimeInput.classList.add("dateTimeInput");
  dateTimeInput.defaultValue = setDefaultDateTime();
  dateTimeInput.type = "datetime-local";
  container.append(dateTimeLabel, dateTimeInput);
  return container;
}

// sets default to input if user doesnt pick date and time
function setDefaultDateTime() {
  const now = new Date();
  return `${now.getFullYear()}-${formatMonth(now)}-${formatDate(now)}T${now.getHours()}:${formatMinutes(now)}`;
}

// returns current month with extra 0 at beginning if needed
function formatMonth(now) {
  let currentMonth = now.getMonth();
  if (currentMonth.toString().length < 2) {
    return `0${Number(currentMonth) + 1}`;
  }
  return `${currentMonth + 1}`;
}

// returns current date with extra 0 at beginning if needed
function formatDate(now) {
  let currentDate = now.getDate();
  if (currentDate.toString().length < 2) {
    return `0${Number(currentDate)}`;
  }
  return currentDate;
}

// returns current minutes with extra 0 at beginning if needed
function formatMinutes(now) {
  let currentMinutes = now.getMinutes();
  if (currentMinutes.toString().length < 2) {
    return `0${Number(currentMinutes)}`;
  }
  return currentMinutes;
}

// splits the date and time from the input and sends them back to each function
function splitDateAndTime(dateOrTime) {
  const taskTime = document.querySelector(".dateTimeInput");
  if (dateOrTime === "date") {
    return taskTime.value.split("T")[0];
  } else {
    return taskTime.value.split("T")[1];
  }
}

// gets the month day and year
function getTheDate() {
  const date = splitDateAndTime("date");
  return date;
}

// gets the hours and minutes
function getTheTime() {
  const time = splitDateAndTime("time");
  return time;
}

// sets number on the object to make it easier to delete
function setTheIndex() {
  indexNum++;
  localStorage.setItem("indexNum", indexNum);
  return indexNum;
}

function saveTask() {
  const mainContent = document.querySelector("#mainContent");
  const newTaskContainer = document.querySelector("#newTaskContainer");
  const taskDisplayContainer = document.querySelector(".taskDisplayContainer");
  const taskTitle = document.querySelector(".taskInput");
  const newTask = new Task(
    taskTitle.innerText,
    getTheDate(),
    getTheTime(),
    setTheIndex(),
    getProjectType(),
  );
  // push new task to array
  taskList.push(newTask);
  newTaskContainer.remove();
  // removes container so duplicates dont happen
  taskDisplayContainer.remove();

  // calls the correct function to display tasks depending on which page is loaded
  if (mainContent.classList.contains("homePage")) {
    // displays all tasks on page
    displayAllTasks(storedTaskList);
  } else if (mainContent.classList.contains("todayPage")) {
    // displays todays tasks on page
    displayTodaysTasks();
  }
  displayOrganizedProjects();
  populateStorage();
}

class Task {
  constructor(title, date, time, indexNum, projectType) {
    this.title = title;
    this.date = date;
    this.time = time;
    this.indexNum = indexNum;
    this.projectType = projectType;
  }
}
