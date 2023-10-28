import { dataArray } from "./globals.js";

export function countUndone(){
  const undoneTask = dataArray.filter(data=>!data.finish).length
  document.querySelector('.count span').textContent = undoneTask;
}