import "./styles.css";
import "./sidebar.js";
import "./home.js";
import "./local-storage.js";
import { loadHomePage } from "./home.js";
import { loadTodayPage } from "./today.js";
import { loadCalendarPage } from "./calendar.js";
import { makeNewTask } from "./new-task.js";

// this will load the home page when clicked
const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", loadHomePage);

// this will load the today page when clicked
const todayBtn = document.querySelector(".todaysTasksBtn");
todayBtn.addEventListener("click", loadTodayPage);

// this will load the calendar page when clicked
const calendarBtn = document.querySelector(".calendarViewBtn");
calendarBtn.addEventListener("click", loadCalendarPage);

// loads home page when website loads
loadHomePage();
makeNewTask();
