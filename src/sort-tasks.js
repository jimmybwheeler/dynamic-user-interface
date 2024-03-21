export function sortTasks() {
  const mainContent = document.querySelector("#mainContent");
  const sortTasksBtn = makeSortBtn();
  mainContent.append(sortTasksBtn);
}

// makes the sort button
function makeSortBtn() {
  const sortBtn = document.createElement("button");
  sortBtn.innerHTML = "&darr;";
  sortBtn.classList.add("sortTasksBtn");
  sortBtn.addEventListener("click", showSortTaskMenu);
  return sortBtn;
}

// changes the sort button innerhtml and will eventually have a dropdown menu
function showSortTaskMenu() {
  this.classList.toggle("up-arrow");
  if (this.classList.contains("up-arrow")) {
    this.innerHTML = "&uarr;";
  } else {
    this.innerHTML = "&darr;";
  }
}
