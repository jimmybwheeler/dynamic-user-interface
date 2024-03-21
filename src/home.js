import { makeNewTask } from "./new-task.js";
import { displayAllTasks } from "./tasks.js";
import { sortTasks } from "./sort-tasks.js";
import { storedTaskList } from "./local-storage.js";
import { displayOrganizedProjects } from "./sidebar.js";

export function loadHomePage() {
  // gets main content container
  const mainContent = document.querySelector("#mainContent");
  // removes classes from main content
  mainContent.className = "";
  // adds home page class to main content
  mainContent.classList.add("homePage");
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
  displayAllTasks(storedTaskList);
  sortTasks();
  displayOrganizedProjects();
}

// makes title for home page
function makeTitle() {
  // gets the date
  let currentDate = new Date();
  currentDate.getHours();

  const h2 = document.createElement("h2");
  h2.classList.add("homeTitle");
  // sets header text depending on time of day
  if (currentDate.getHours() >= 8 && currentDate.getHours() <= 11) {
    h2.innerText = "Good Morning";
  } else if (currentDate.getHours() > 11 && currentDate.getHours() <= 16) {
    h2.innerText = "Good Afternoon";
  } else if (currentDate.getHours() > 16 && currentDate.getHours() <= 21) {
    h2.innerText = "Good evening";
  } else {
    h2.innerText = "Go to sleep";
  }
  return h2;
}
