import { dataArray,taskOverview } from "./globals.js";
import { updateAllTask } from "./updateAllTask.js";
updateAllTask(dataArray, taskOverview);

//header
import { headerCategories,selectCategory } from "./switchPanel.js";
headerCategories.addEventListener("click", selectCategory);

//addTask
//add共用父元素
import { addTask,taskItem,newTask,editNewTask,uploadFile } from "./addTask.js";
addTask.addEventListener("click",newTask)
taskItem.addEventListener('click',editNewTask)
taskItem.addEventListener('change',uploadFile)

//refreshPage
import { editButton,isRefreshPage } from "./refreshEdit.js";
editButton.forEach((button,index)=>isRefreshPage(index));