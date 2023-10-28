export const editButton = document.querySelectorAll(".task .task_edit_button");
//如果頁面重新整理，編輯中的task會被關閉
export function isRefreshPage(index) {
  //API得到瀏覽器的效能資料，並透過navigation得到該網頁的效能紀錄，再藉由type判斷是否重新整理過網頁
  if (performance.getEntriesByType("navigation")[0].type) {
    dataArray[index].edit = false;
    refreshContent();
  }
}