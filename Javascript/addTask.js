import { refreshContent } from "./refreshContent.js";
import { dataArray } from "./globals.js";
export const addTask = document.querySelector(".add_task_button");
export const taskItem = document.querySelector(".add_task_item");

export function newTask(){
  addTask.style.display = "none";
  taskItem.style.display = "block";
};

export function editNewTask(event){
  if (event.target.classList.contains('cancel_button')){
    cancelInput();
  }
  if (event.target.classList.contains('fal')||event.target.classList.contains('fas')){
    changeStarColor(event);
  }
  if (event.target.classList.contains('confirm_button')){
    confirmContent()
  }
}

function changeStarColor(event) {
  event.target.classList.toggle("fal");
  event.target.classList.toggle("fas");
  taskItem.querySelector(".task_information").classList.toggle("toggleImportantColor");
  taskItem.querySelector(".task_title").classList.toggle("toggleImportantColor");
}

let fileArray = [];
export function uploadFile(event){
  //防止點到上傳檔案以外的input值
  if (!event.target.classList.contains("uploadFile")) return;
  fileArray = event.target.files[0];
  document.querySelector('.file_data').style.display = 'block';
  document.querySelector('.file_name').textContent = fileArray.name;
  const newDate = new Date();
  document.querySelector('.file_date').textContent = `${newDate.getFullYear()}年${newDate.getMonth()}月${newDate.getDay()}日`
}

function cancelInput() {
  taskItem.style.display = "none";
  addTask.style.display = "block";
  taskItem.reset();
}

function confirmContent() {
  const taskTitle = taskItem.querySelector(".task_title").value;
  const date = taskItem.querySelector(".deadline_button_date").value;
  const time = taskItem.querySelector(".deadline_button_time").value;
  const comment = taskItem.querySelector(".comment_text").value;
  const taskItemFinish = taskItem.querySelector(".finish_task")
  const importantIcon = taskItem.querySelector(".fa-star");

  let dateArray = date.split("-");
  let importantChecked = false;
  let editChecked = false;
  let finishChecked = false;

  if (importantIcon.classList.contains("fas")) {
    importantChecked = !importantChecked;
  }
  if (taskItemFinish.checked) {
    finishChecked = !finishChecked;
  }

  const newDate = new Date();

  let taskData = {
    taskTitle: taskTitle,
    edit: editChecked,
    priority: importantChecked,
    finish: finishChecked,
    date: date,
    month: dateArray[1],
    day: dateArray[2],
    time: time,
    fileName: fileArray.name,
    fileDate: `${newDate.getFullYear()}年${newDate.getMonth()}月${newDate.getDay()}日`,
    comment: comment,
  };

  dataArray.push(taskData);
  taskItem.style.display = "none";
  refreshContent();
  taskItem.reset();
}