import { editExistingTask,changeFile } from "./editExistingTask.js";
import { draggedIndex,changeStyle,getTargetIndex,exchangeTask,cancelDefault } from "./dragTask.js"
import { dataArray } from "./globals.js";

export function updateAllTask(taskArray = [], taskList) {
  taskList.innerHTML = taskArray
    .map((task, index) => {
      return ` 
    <form class="task ${task.finish ? "finishTask" : ""}${task.priority ? `importantTask` : ""}" data-index="${index}" draggable="true">
      <div class="task_item_state ${
        task.priority ? `toggleImportantColor` : ""
      }" data-index="${index}">
        <div class="task_information ${
          task.priority ? `toggleImportantColor` : ""
        }"> 
          <div class="task_event">
            <input class="finish_task" data-index="${index}" type="checkbox" ${
        task.finish ? "checked" : ""
      }/>
            <input class="task_title ${
              task.priority ? `toggleImportantColor` : ""
            }" data-index="${index}" type="text" size="30" ${
        task.edit ? "" : `readonly=readonly`
      } placeholder="${task.taskTitle?task.taskTitle:"type something here..."}">
          </div>
          <div class="task_mark">
            <button class="task_important" data-index="${index}" type="button"> <i class="${
        task.priority ? "fas fa-star" : "fal fa-star"
      }" data-index="${index}"></i></button>
            <button class="task_edit_button" data-index="${index}" type="button"> <i class="${
        task.edit ? "fa-solid fa-pen" : "bi bi-pencil"
      }" data-index="${index}"></i></button>
          </div>
        </div>
        ${
          task.edit?""
            : `<div class="task_state_information">
          ${
            task.date
              ? `<div class="date_icon" data-index="${index}"><time class="time">${task.month}/${task.day}</time></div>`
              : ""
          }
          ${
            task.fileName
              ? `<div class="file_icon" data-index="${index}"></div>`
              : ""
          }
          ${
            task.comment
              ? `<div class="comment_icon" data-index="${index}"></div>`
              : ""
          }
        </div>`
        }
      </div>
      <div class="task_edit ${task.edit ? "" : "display_none"}">
        <div class="edit_input">
          <div class="deadline">
            <label for="deadline" class="deadline_text">deadline</label>
            <div class="deadline_button">
              <input type="date" ${task.finish?`readonly=readonly`:""} name="deadline" id="deadline" class="deadline_button_date" value=${
                task.date
              }>
              <input type="time" ${task.finish?`readonly=readonly`:""} class="deadline_button_time" value=${
                task.time
              }>
            </div>
          </div>
          <div class="file_container">
            <label for="file${index}" class="file_text">file
              <input type="file" name="file" id="file${index}" class="changeFile" data-index="${index}" ${task.finish?`readonly=readonly`:""}/>
              <div class="file_button">
                <div class="file_data ${task.fileName ? "display_block" : ""}">
                  <span class="file_name">${task.fileName}</span>
                  <span class="file_date">${
                    task.fileDate !== "" ? `uploaded ${task.fileDate}` : ""
                  }</span>
                  </div>
                <div class="file_button_icon"><i class="fas fa-plus"></i></div>
              </div>
            </label>
          </div>
          <div class="comment">
            <label for="comment" class="comment_title">comment</label>
            <textarea name="comment" class="comment_text" rows="5" placeholder="Type your memo here..." id="comment"  ${task.finish?`readonly=readonly`:""}>${
              task.comment
            }</textarea>
          </div>
        </div>
        <div class="check">
          <button class="cancel_button" type="reset" data-index="${index}">cancel</button>
          <button class="confirm_button" type="submit" data-index="${index}">add task</button>
        </div>
      </div>
    </form>`;
    })
    .join("");

<<<<<<< HEAD
      //重新綁一次父元素
=======
  //重新綁一次父元素
>>>>>>> 6b97c5e96bd4a82fc2b245ed0b82b1f8d5adfe3b
  document.querySelectorAll(".task").forEach(task=>{
    task.addEventListener("click",editExistingTask)
    task.addEventListener("change",changeFile)
  })
  //拖曳事件
  document.querySelectorAll(".task").forEach((task,index) => {
    if (dataArray[index].edit) return
    task.addEventListener("dragstart", draggedIndex);
    task.addEventListener("drag", changeStyle);
    task.addEventListener("dragenter", cancelDefault);
    task.addEventListener("dragover", getTargetIndex);
    task.addEventListener("dragend", exchangeTask);
  });

  document.querySelectorAll(".task .finish_task").forEach((finish,index) => {
    if (document.querySelectorAll(".task_state_information")[index]===undefined) return;
    if (dataArray[index].finish){
      document.querySelectorAll(".task_state_information")[index].style.display='none'
    }
  });
}