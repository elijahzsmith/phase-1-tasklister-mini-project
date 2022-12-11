document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const inputField = document.getElementById("new-task-description");
  const outputField = document.getElementById("tasks"); // my todos aka output field / todo list

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default of going to new url
    console.log(e.target.new_task_description);
    const addedToDo = document.createElement("li"); // create p element
    addedToDo.innerText = inputField.value; // adds content of input field to p elem
    outputField.appendChild(addedToDo); // adds p element to todo list
    inputField.value = ""; // reset input field to empty once you submit todo
  });
});
