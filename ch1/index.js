var tasksRef = db.collection("tasks");
var currentTasks = [];
var activeFilter = "all";

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
      updateTasks();
    });
}

const updateTasks = () => {
  document.getElementById("todos").innerHTML = ""; //need to reset html so the container can receive new data without repeating it
  currentTasks.forEach((task) => {
    if (activeFilter === "completed" && !task.completed) {
      return;
    } else if (activeFilter === "active" && task.completed) {
      return;
    }
    document.getElementById("todos").insertAdjacentHTML(
      "beforeend",
      `<div class="container row single-todo">
  <div onclick="toggleState('${task?.id}')" class="input hover ${
        task?.completed ? "completed" : ""
      }"></div>
  <span class="task-name ${task?.completed ? "completed" : ""}">${
        task?.name
      }</span>
  <span onclick="deleteTask('${task?.id}')" class="remove-task">X</span>
</div>`
    );
  });
};

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
  let name = document.getElementById("new-task-input").value;
  tasksRef.add({ name, completed: false }).then(() => {
    document.getElementById("new-task-input").value = "";
    loadTasks();
  });
};

const changeFilter = (e, newFilter) => {
  activeFilter = newFilter;
  let els = document.getElementsByClassName("active-filter");
  els[0].classList.remove("active-filter");
  e.srcElement.classList.add("active-filter");
  updateTasks();
};

const validateInput = () => {
  let input = document.getElementById("new-task-input").value;
  console.log(input);
  if (input === "") {
    document.getElementById("submitNewTask").classList.add("hidden");
  } else {
    document.getElementById("submitNewTask").classList.remove("hidden");
  }
};
