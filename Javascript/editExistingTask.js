import { refreshContent } from "./refreshContent.js";
import { dataArray } from "./globals.js";

export function editExistingTask(event) {
  const index = event.currentTarget.dataset.index
  const classList = event.target.classList;
  const isContainsEdit = classList.contains('bi-pencil')||classList.contains('fa-pen')
  if (isContainsEdit){
    handleEditButton(event.currentTarget);
  }
  if (classList.contains("fa-star")){
    if (dataArray[index].finish) return;
    toggleImportant(event.currentTarget)
  }
  if (classList.contains('confirm_button')){
    updateExistTask(event,event.target,event.currentTarget)
  }
  if (classList.contains('cancel_button')){
    cancelEdit(event.currentTarget) 
  }
  if (classList.contains('finish_task')){
    finishTask(event.currentTarget) 
  }
}

function updateExistTask(event,target,currentTarget) {
  event.preventDefault();

  const index = currentTarget.dataset.index;
  const taskTitles = document.querySelectorAll(".task .task_title");
  const dates = document.querySelectorAll(".task .deadline_button_date");
  const time = document.querySelectorAll(".task .deadline_button_time");
  const comment = document.querySelectorAll(".task .comment_text");
  
  let dateArray = [];
  dateArray = dates[index].value.split("-");
  const nowDate = new Date();
  dataArray[index].taskTitle = taskTitles[index].placeholder;
  dataArray[index].date = dates[index].value;
  dataArray[index].time = time[index].value;
  dataArray[index].month = dateArray[1],
  dataArray[index].day = dateArray[2],
  dataArray[index].fileName = fileArray.name,
  dataArray[index].fileDate = `${nowDate.getFullYear()}年${nowDate.getMonth()}月${nowDate.getDay()}日`,
  dataArray[index].comment = comment[index].value;
  dataArray[index].edit = false;
  refreshContent();
}

function handleEditButton(currentTarget){
  const index = currentTarget.dataset.index;
  dataArray[index].edit = !dataArray[index].edit;
  refreshContent();
}

function toggleImportant(currentTarget) {
  const index = currentTarget.dataset.index;
  dataArray[index].priority = !dataArray[index].priority;
  refreshContent();
}

function cancelEdit(currentTarget) {
  const index = currentTarget.dataset.index;
  dataArray[index].edit = false;  
  refreshContent();
}

function finishTask(currentTarget) {
  const index = currentTarget.dataset.index;

  dataArray[index].finish = !dataArray[index].finish;

  if (dataArray[index].finish) {
    dataArray[index].priority = false;
  }
  refreshContent();
}

let fileArray = [];
export function changeFile(event){
  if (!event.target.classList.contains("changeFile")) return;
  fileArray = event.target.files[0];
  const index = Number(event.currentTarget.dataset.index)
  document.querySelectorAll('.task .file_data')[index].style.display = 'block';
  document.querySelectorAll('.task .file_name')[index].textContent = fileArray.name;
  const newDate = new Date();
  document.querySelectorAll('.task .file_date')[index].textContent = `${newDate.getFullYear()}年${newDate.getMonth()}月${newDate.getDay()}日`
}