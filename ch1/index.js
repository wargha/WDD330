var tasksRef = db.collection("tasks");
var currentTasks = [];
var activeFilter = "active";
window.onload = loadTasks();
function loadTasks() {
  currentTasks = [];
  tasksRef //vamos pegar as tasks da nossa db
    .get()
    .then((queryResults) => {
      queryResults.forEach((task) => {
        let pushTask = { ...task.data(), id: "" };
        pushTask.id = task.id;
        currentTasks.push(pushTask); //ai vamos parse async
      });
    })
    .then(() => {
      //se chegamos aqui e pq terminamos nossa query, e ja podemos colocar todas as tasks na tela! :)
      document.getElementById("todos").innerHTML = ""; //need to reset html so the container can receive new data without repeating it
      currentTasks.forEach((task) => {
        document.getElementById("todos").insertAdjacentHTML(
          "beforeend",
          `<div class="container row single-todo">
      <div onclick="toggleState('${task?.id}')" class="input hover ${
            task.completed ? "completed" : ""
          }"></div>
      <span class="task-name">${task?.name}</span>
      <span onclick="deleteTask('${task?.id}')" class="remove-task">X</span>
    </div>`
        );
      });
    });
}

const toggleState = (id) => {
  let completed = [...currentTasks]?.filter((task) => task?.id === id)[0]
    ?.completed;
  tasksRef
    .doc(id)
    .update({ completed: !completed })
    .then(() => {
      console.log("update feito com sucesso! : )");
      loadTasks();
    });
};

const deleteTask = (id) => {
  tasksRef
    .doc(id)
    .delete()
    .then(() => {
      console.log("deletado com sucesso! : )");
      loadTasks();
    });
};

const addTask = () => {
  tasksRef.add({ name: "Lucas", completed: false }).then(() => {
    loadTasks();
  });
};

const changeFilter = (e, newFilter) => {
  console.log(e);
  activeFilter = newFilter;
};
