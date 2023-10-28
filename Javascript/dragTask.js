import { taskOverview,dataArray } from "./globals.js";
import { refreshContent } from "./refreshContent.js";

let dropIndex = null;
let targetIndex = null;

let copyTask = null

export function draggedIndex(event) {
  dropIndex = Number(event.target.dataset.index);
  
  const img = new Image();
  img.src = "data:image/svg+xml,%3Csvgxmlns='http://www.w3.org/2000/svg'%3E%3Cpath/%3E%3C/svg%3E";
  event.dataTransfer.setDragImage(img,0,0);
  copyTask = this.cloneNode(true);
  
  copyTask.style = `position:fixed;left:0;top:0;z-index:999;pointer-events:none;transform:translate3d(${event.clientX}px,${event.clientY}px,0)`;
  taskOverview.appendChild(copyTask); 
}


export function changeStyle(event){
  event.target.style.opacity = 0;
  copyTask.classList.add('taskDragShadow')
  copyTask.classList.add('dragIcon')

  if (copyTask) {
    const x = event.clientX-event.target.offsetWidth/2
    copyTask.style.transform = `translate3d(${x}px,${event.clientY}px,0)`;
  }
}


export function getTargetIndex(event) {
  targetIndex = Number(event.target.dataset.index);
}

export function exchangeTask(event) {  
  if (copyTask) {
    taskOverview.removeChild(copyTask);
    copyTask = null;
  }

  event.target.style.opacity = 1;

  if (dropIndex > targetIndex) {
    [dataArray[targetIndex], dataArray[dropIndex]] = [
      dataArray[dropIndex],
      dataArray[targetIndex],
    ];
  } else if (dropIndex < targetIndex) {
    [dataArray[dropIndex], dataArray[targetIndex]] = [
      dataArray[targetIndex],
      dataArray[dropIndex],
    ];
  }
  refreshContent();
}

export function cancelDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}