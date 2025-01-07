document.addEventListener("DOMContentLoaded", () => {
    const taskInput = 
          document.getElementById("task-input");
                                                    const addTaskButton =
                                                          document.getElementById("add-task");
                                                    const tasklist =
                                                          document.getElementById("task-list");
                                                     
                                                     
                                                     // Add a new task
                                                     addTaskButton.addEventListener("click", () => {
                                                         const taskText =
                                                               taskInput.value.trim();
                                                         if (taskText === "") {
                                                             alert("Please enter a task!");
                                                             return;
                                                         }
                                                         
                                                         // Create a new list item
                                                         const taskItem =
                                                               document.createElement("li");
                                                         
                                                         // Add task text
                                                         const taskSpan =
                                                               document.createElement("span");
                                                         taskSpan.textContent =
                                                             taskText;
                                                         
                                                         taskSpan.addEventListener("click", () => {
                                                             
                                                             taskItem.classList.toggle("completed");
                                                             
                                                         });
                                                         
                                                         // Add delete button
                                                         
                                                         const deleteButton =
                                                               document.createElement("button");
                                                         deleteButton.textContent =
                                                             "Delete";
                                                         deleteButton.classList.add("delete");
                                                         deleteButton.addEventListener("click", () => {
                                                             tasklist.removeChild(taskItem);
                                                             
                                                         });
                                                         // Append text and button to the list item
                                                         taskItem.appendChild(taskSpan);
                                                         taskItem.appendChild(deleteButton);
                                                         // Add the new task to the list
                                                         tasklist.appendChild(taskItem);
                                                         // Clear the input field
                                                         taskInput.value = "";
                                                         
                                                     });
                                                    });



