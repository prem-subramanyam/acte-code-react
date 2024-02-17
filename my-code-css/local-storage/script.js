let todo = {
  sla: "",
  todoValue: "",
};

function addToDo() {
  let sla = document.getElementById("todo-select").value;
  let todoText = document.getElementById("todo-text").value;

  todo.sla = sla;
  todo.todoValue = todoText;

  localStorage.setItem(todo.todoValue, JSON.stringify(todo));
  generateRows();
}

function clearAll() {
  localStorage.clear();
  generateRows();
}

function generateRows() {
  document.getElementById("result").innerHTML = "";
  let allRows = getAllToDo();

  makeToDoHeader();
  // allRows.unshift(headerRow);

  allRows.map((eachToDo) => {
    let eachDiv = document.createElement("div");

    let isColorEnabled = document.getElementById("enableColors").checked;
    if (isColorEnabled) {
      enableColors(eachToDo, eachDiv);
    } else {
      eachDiv.classList.add("eachDivWithoutColor");
    }

    let slaSpan = document.createElement("div");
    let todoSpan = document.createElement("div");
    let buttonSpan = document.createElement("div");

    slaSpan.append(eachToDo.sla);
    todoSpan.append(eachToDo.todoValue);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.setAttribute("class", "test-right");

    // deleteButton.setAttribute(
    //   "onclick",
    //   "deleteToDo('" + eachToDo.todoValue + "')"
    // );

    deleteButton.addEventListener("click", function () {
      deleteToDoListener(eachToDo);
    });

    buttonSpan.append(deleteButton);

    eachDiv.append(slaSpan, todoSpan, buttonSpan);

    document.getElementById("result").append(eachDiv);
  });
}

function getAllToDo() {
  let allToDo = [];

  let allKeys = Object.keys(localStorage);
  for (let i = 0; i < allKeys.length; i++) {
    let eachToDo = localStorage.getItem(allKeys[i]);
    allToDo.push(JSON.parse(eachToDo));
  }

  return allToDo;
}

function deleteToDo(eachToDoValue) {
  localStorage.removeItem(eachToDoValue);
  generateRows();
}

function deleteToDoListener(eachToDo) {
  localStorage.removeItem(eachToDo.todoValue);
  generateRows();
}

function enableColors(eachToDo, eachDiv) {
  if (eachToDo.sla === "Easy") {
    eachDiv.classList.add("eachDivClass", "lightgreen");
  } else if (eachToDo.sla === "Moderate") {
    eachDiv.classList.add("eachDivClass", "lightpink");
  } else {
    eachDiv.classList.add("eachDivClass", "darkpink");
  }
}

function makeToDoHeader() {
  let headerDiv = document.createElement("div");
  let slaDiv = document.createElement("div");
  let descDiv = document.createElement("div");
  let delDiv = document.createElement("div");

  slaDiv.append("SLA");
  descDiv.append("ToDo Description");
  delDiv.append("Delete ToDo");

  headerDiv.append(slaDiv, descDiv, delDiv);
  headerDiv.classList.add("eachDivClass", "heading");
  document.getElementById("result").append(headerDiv);
}
