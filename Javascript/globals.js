export const taskOverview = document.querySelector(".taskOverview");
export let dataArray = JSON.parse(localStorage.getItem("item")) || [];
export const tasks = document.querySelectorAll(".task")
