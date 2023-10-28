//header
export let currentPage = ''
export const headerCategories = document.querySelector(".header_task_category");
let dataArray = JSON.parse(localStorage.getItem("item")) || [];

export function selectCategory(event) {
  if (event.target === headerCategories) return;

  headerCategories.querySelectorAll("li").forEach(link => {
    //link not target link and ul not target link
    //如果不是被點選的頁籤就移除樣式
    if (this !== event.target) {
      link.classList.remove("active");
    }
    //是被點選的樣式就增加
    event.target.classList.add("active");
    currentPage = event.target.dataset.name;
    filterTask(currentPage);
  });
}

export function filterTask(page) {
  const tasks = document.querySelector(".taskOverview").children
  dataArray.forEach((data, index) => {
    switch (page) {
      case "myTasks":
        tasks[index].style.display = "block";
        break;

      case "inProgress":
        if (!data.finish) {
          tasks[index].style.display = "block";
        } else {
          tasks[index].style.display = "none";
        }
        break;

      case "completed":
        if (data.finish) {
          tasks[index].style.display = "block";
        } else {
          tasks[index].style.display = "none";
        }
        break;
    }
  });
}

