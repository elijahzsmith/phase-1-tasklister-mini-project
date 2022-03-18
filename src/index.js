document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // whole form element
  const formContainer = document.querySelector("form");
  // console.log(formContainer);

  // 
  const form = document.getElementById("create-task-form");
  console.log(form)
  // input field
  const inputField = document.getElementById("new-task-description");
  // console.log(inputField);

  // create new task button (added id of submit button)
  const submitButton = document.getElementById("submit-button");
  // console.log(submitButton);

  // my todos aka output field / todo list
  const outputField = document.getElementById("tasks");
  // console.log(outputField);

  // add Input To Output 
  // (e) because we're listening for whatever event happens which in this case is "submit"
    form.addEventListener("submit", (e) => { 
    e.preventDefault(); // prevent default of going to new url
      const addedToDo = document.createElement("li"); // create p element
      addedToDo.innerText = inputField.value; // adds content of input field to p elem
      const todoList = outputField.appendChild(addedToDo); // adds p element to todo list
      inputField.value = ""; // reset input field to empty once you submit todo
    })
});