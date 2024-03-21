import { makeNewTask } from "./new-task.js";
export function loadCalendarPage() {
  // gets main content container
  const mainContent = document.querySelector("#mainContent");
  // resets main content so duplicate elements dont appear
  mainContent.innerHTML = "";
  // adds new task button back
  makeNewTask();
  // creates container for content
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  // creates container for month name and buttons
  const monthContainer = document.createElement("div");
  monthContainer.classList.add("monthContainer");
  // appends items to month container
  monthContainer.append(
    makePreviousMonthButton(),
    getMonth(),
    currentYear(),
    makeNextMonthButton(),
  );
  // appends items to correct containers
  mainContainer.append(makeTitle(), monthContainer);
  mainContent.append(mainContainer);
  // makes the calendar
  makeCalendar(mainContainer);
}

function makeCalendar(mainContainer) {
  const calendarContainer = document.createElement("div");
  calendarContainer.classList.add("calendarContainer");
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.classList.add("calendarRow");
    for (let i = 0; i < 7; i++) {
      const square = document.createElement("div");
      square.classList.add("calendarSquare");
      row.append(square);
    }
    calendarContainer.append(row);
  }
  calendarContainer.prepend(makeDayOfWeekHeader());
  mainContainer.append(calendarContainer);
}

function makeDayOfWeekHeader() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysHeader = document.createElement("div");
  daysHeader.classList.add("calendarDaysHeader");
  for (let i = 0; i < 7; i++) {
    const box = document.createElement("div");
    box.innerText = daysOfWeek[i];
    daysHeader.append(box);
  }
  return daysHeader;
}

// array of objects for each month
const months = [
  {
    name: "January",
    days: 31,
  },
  {
    name: "February",
    days: getFebDays(),
  },
  {
    name: "March",
    days: 31,
  },
  {
    name: "April",
    days: 30,
  },
  {
    name: "May",
    days: 31,
  },
  {
    name: "June",
    days: 30,
  },
  {
    name: "July",
    days: 31,
  },
  {
    name: "August",
    days: 31,
  },
  {
    name: "September",
    days: 30,
  },
  {
    name: "October",
    days: 31,
  },
  {
    name: "November",
    days: 30,
  },
  {
    name: "December",
    days: 31,
  },
];

// returns the amount of days that are in february
function getFebDays() {
  const year = new Date();
  if (
    (0 == year.getFullYear() % 4 && 0 != year.getFullYear() % 100) ||
    0 == year.getFullYear() % 400
  ) {
    return 29;
  } else {
    return 28;
  }
}

// makes title for today page
function makeTitle() {
  const h2 = document.createElement("h2");
  h2.classList.add("calendarTitle");
  h2.innerText = "Calendar";
  return h2;
}

// gets the current month
function getMonth() {
  const now = new Date();
  const h2 = document.createElement("h2");
  h2.classList.add("monthName");
  h2.innerText = months[now.getMonth()].name;
  return h2;
}

// returns the current year
function currentYear() {
  const now = new Date();
  const div = document.createElement("div");
  div.classList.add("currentYear");
  div.innerText = now.getFullYear();
  return div;
}

// makes the previous month button and event listener
function makePreviousMonthButton() {
  const button = document.createElement("button");
  button.classList.add("previousMonthBtn");
  button.innerText = "<";
  button.addEventListener("click", changeMonth);
  return button;
}

// makes the next month button and event listener
function makeNextMonthButton() {
  const button = document.createElement("button");
  button.classList.add("nextMonthBtn");
  button.innerText = ">";
  button.addEventListener("click", changeMonth);
  return button;
}

// changes the month to either the next month in array or the previous
function changeMonth(e) {
  const monthDisplay = document.querySelector(".monthName");
  if (e.target.className === "previousMonthBtn") {
    let newMonth =
      months.findIndex((months) => months.name == monthDisplay.innerText) - 1;
    if (newMonth === -1) {
      newMonth = 11;
      monthDisplay.innerText = months[newMonth].name;
    }
    monthDisplay.innerText = months[newMonth].name;
  } else if (e.target.className === "nextMonthBtn") {
    let newMonth =
      months.findIndex((months) => months.name == monthDisplay.innerText) + 1;
    if (newMonth === 12) {
      newMonth = 0;
      monthDisplay.innerText = months[newMonth].name;
    }
    monthDisplay.innerText = months[newMonth].name;
  }
}
