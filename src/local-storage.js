import { taskList } from "./tasks.js";
export let storedTaskList = [];

// populates storage
export function populateStorage() {
  if (taskList.length !== 0) {
    storedTaskList = [];
    taskList.forEach((task) => {
      storedTaskList.push(task);
      localStorage.setItem("storedTaskList", JSON.stringify(storedTaskList));
    });
  }

  getTaskListFromStorage();
}

// gets the task list from storage
export function getTaskListFromStorage() {
  storedTaskList = JSON.parse(localStorage.getItem("storedTaskList") || "[]");
  return storedTaskList;
}

// sends stored items to side bar
function displayOrganizedProjectsFromStorage() {
  const personalSection = document.querySelector(".personalSectionContainer");
  const workSection = document.querySelector(".workSectionContainer");
  const uncategorizedSection = document.querySelector(
    ".uncategorizedSectionContainer",
  );
  // removes items from side bar
  const sidebarContainerBottom = document.querySelectorAll(
    ".sidebarContainerBottom > section > div",
  );
  sidebarContainerBottom.forEach((div) => {
    div.remove();
  });
  // gets all divs that are childen of section elements and removes them to avoid duplicates
  let storedList = JSON.parse(localStorage.getItem("storedTaskList"));
  console.log(storedList);
  if (storedList !== null) {
    storedList.forEach((task) => {
      if (task.projectType == "isPersonalProject") {
        const div = document.createElement("div");
        div.innerText = task.title;
        personalSection.append(div);
      } else if (task.projectType == "isWorkProject") {
        const div = document.createElement("div");
        div.innerText = task.title;
        workSection.append(div);
      } else {
        const div = document.createElement("div");
        div.innerText = task.title;
        uncategorizedSection.append(div);
      }
    });
  }
}

// calls the functions when website loads
getTaskListFromStorage();
populateStorage();
displayOrganizedProjectsFromStorage();
