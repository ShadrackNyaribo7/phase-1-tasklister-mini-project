document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  const taskDescription = document.querySelector("#new-task-description");

  taskDescription.addEventListener("click", checkboxClick, false);


  let warn = "preventDefault() this shall not pass!<br>";
  document.getElementById("new-task-description").innerHTML += warn;
  event.preventDefault();
});
