const list = document.querySelector(".list");
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const empty = document.querySelector(".empty")

form.addEventListener("submit", addTask);

list.addEventListener("click", deleteTask);

list.addEventListener("click", doneTask);

function addTask(event) {
  event.preventDefault();

  const taskText = input.value;

  const newTask = `<li class="item">
										<div class="li-container">
											<div class="task-name">${taskText}</div>
											<div class="item__buttons">
												<button type="button" data-action="done" class="button">
													<img src="./img/tick.svg" alt="Done" width="18" height="18">
												</button>
												<button type="button" data-action="delete" class="button">
													<img src="./img/cross.svg" alt="Done" width="18" height="18">
												</button>
											</div>
										</div>
									</li>`;

  list.insertAdjacentHTML("beforeend", newTask);

  input.value = "";
  input.focus();

	if (list.children.length > 1) {
		empty.classList.add("none");
	}
}

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") return;

  const parentElement = event.target.closest(".item");

  parentElement.remove();

	if (list.children.length === 1) {
		empty.classList.remove("none");
	 }
}

function doneTask(event) {
  if (event.target.dataset.action !== "done") return;

	const parentElement = event.target.closest(".li-container")

  const taskName = parentElement.querySelector(".task-name");
  taskName.classList.toggle("task-name--done")
}

function checkEmpty() {
	if (list.children.length > 1) {
		empty.classList.add("none");
	}

	if (list.children.length < 1) {
 	empty.classList.remove("none");
	}
}