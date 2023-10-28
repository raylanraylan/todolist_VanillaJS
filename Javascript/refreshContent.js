import { countUndone } from "./countUndone.js";
import { updateAllTask } from "./updateAllTask.js";
import { dataArray,taskOverview } from "./globals.js";
import { filterTask,currentPage } from "./switchPanel.js";

export function refreshContent(){
  //資料存入local
  localStorage.setItem("item", JSON.stringify(dataArray));
  updateAllTask(dataArray, taskOverview);
  //重新篩選分類
  filterTask(currentPage);
  //重新計算數量
  countUndone();
}