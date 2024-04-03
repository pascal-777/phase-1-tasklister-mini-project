document.addEventListener("DOMContentLoaded", () => {
  const descriptionInput = document.getElementById("new-task-description");
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lisItem = document.createElement("li");
    lisItem.innerText = descriptionInput.value;
    const remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    remove_btn.addEventListener("click", (event) => {
      event.target.parentNode.remove(list_item);
    });
    lisItem.appendChild(remove_btn);
    taskList.appendChild(list_item);
  });
});
});
