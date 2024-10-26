document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
      li.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => li.remove());
  
      li.appendChild(deleteBtn);
      li.addEventListener("click", () => li.classList.toggle("completed"));
  
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
  