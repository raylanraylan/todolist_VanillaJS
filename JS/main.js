<<<<<<< HEAD
import { dataArray,taskOverview,tasks } from "./globals.js";
=======
import { dataArray,taskOverview } from "./globals.js";
>>>>>>> 6b97c5e96bd4a82fc2b245ed0b82b1f8d5adfe3b
import { updateAllTask } from "./updateAllTask.js";
updateAllTask(dataArray, taskOverview);

//header
import { headerCategories,selectCategory } from "./switchPanel.js";
<<<<<<< HEAD
headerCategories.addEventListener('click', selectCategory);

//addTask按鈕
//add共用父元素
import { addTask,taskItem,newTask,editNewTask,uploadFile } from "./addTask.js";
addTask.addEventListener('click',newTask)
=======
headerCategories.addEventListener("click", selectCategory);

//addTask
//add共用父元素
import { addTask,taskItem,newTask,editNewTask,uploadFile } from "./addTask.js";
addTask.addEventListener("click",newTask)
>>>>>>> 6b97c5e96bd4a82fc2b245ed0b82b1f8d5adfe3b
taskItem.addEventListener('click',editNewTask)
taskItem.addEventListener('change',uploadFile)

//refreshPage
<<<<<<< HEAD
//重新整理畫面時，收起任務的編輯畫面
=======
>>>>>>> 6b97c5e96bd4a82fc2b245ed0b82b1f8d5adfe3b
import { editButton,isRefreshPage } from "./refreshEdit.js";
editButton.forEach((button,index)=>isRefreshPage(index));