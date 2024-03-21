import { taskList } from "./tasks";

const sidebarDisplay = document.querySelector("#sidebar");

// creates all the buttons in the sidebar
function makeSidebarTop() {
  const sidebarContainerTop = document.createElement("div");
  sidebarContainerTop.classList.add("sidebarContainerTop");
  sidebarContainerTop.append(makeHomeBtn(), makeTodayBtn(), makeCalendarBtn());
  sidebarDisplay.append(sidebarContainerTop);
}

// displays all tasks when page loads or clicked
function makeHomeBtn() {
  const button = document.createElement("button");
  button.classList.add("homeBtn");
  button.innerText = "Home";
  return button;
}

// displays todays tasks when clicked
function makeTodayBtn() {
  const button = document.createElement("button");
  button.classList.add("todaysTasksBtn");
  button.innerText = "Today";
  return button;
}

// displays a calendar showing all tasks on each date
function makeCalendarBtn() {
  const button = document.createElement("button");
  button.classList.add("calendarViewBtn");
  button.innerText = "Calendar";
  return button;
}

// creates personal and work sections
function makeSidebarBottom() {
  const sidebarContainerBottom = document.createElement("div");
  sidebarContainerBottom.classList.add("sidebarContainerBottom");
  sidebarContainerBottom.append(
    makePersonalSection(),
    makeWorkSection(),
    makeUncategorizedSection(),
  );
  sidebarDisplay.append(sidebarContainerBottom);
}

// user projects tagged as personal will appear under this section
function makePersonalSection() {
  const section = document.createElement("section");
  section.classList.add("personalSectionContainer");

  const h2 = document.createElement("h2");
  h2.classList.add("personalSectionTitle");
  h2.innerText = "Personal";

  section.append(h2);
  return section;
}

// user projects tagged as work will appear under this section
function makeWorkSection() {
  const section = document.createElement("section");
  section.classList.add("workSectionContainer");

  const h2 = document.createElement("h2");
  h2.classList.add("workSectionTitle");
  h2.innerText = "Work";

  section.append(h2);
  return section;
}

// user projects tagged as unorganized will appear under this section
function makeUncategorizedSection() {
  const section = document.createElement("section");
  section.classList.add("uncategorizedSectionContainer");

  const h2 = document.createElement("h2");
  h2.classList.add("uncategorizedSectionTitle");
  h2.innerText = "Uncategorized";

  section.append(h2);
  return section;
}

// sends the correct project to the correct container in the side bar
export function displayOrganizedProjects() {
  const personalSection = document.querySelector(".personalSectionContainer");
  const workSection = document.querySelector(".workSectionContainer");
  const uncategorizedSection = document.querySelector(
    ".uncategorizedSectionContainer",
  );
  // gets all divs that are childen of section elements and removes them to avoid duplicates
  const sidebarContainerBottom = document.querySelectorAll(
    ".sidebarContainerBottom > section > div",
  );
  sidebarContainerBottom.forEach((div) => {
    div.remove();
  });
  taskList.forEach((task) => {
    if (task.projectType == "isPersonalProject") {
      const div = document.createElement("div");
      div.dataset.indexNum = task.indexNum;
      div.innerText = task.title;
      personalSection.append(div);
    } else if (task.projectType == "isWorkProject") {
      const div = document.createElement("div");
      div.dataset.indexNum = task.indexNum;
      div.innerText = task.title;
      workSection.append(div);
    } else {
      const div = document.createElement("div");
      div.dataset.indexNum = task.indexNum;
      div.innerText = task.title;
      uncategorizedSection.append(div);
    }
  });
}

makeSidebarTop();
makeSidebarBottom();
