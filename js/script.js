const tasks = [
  {nombre: "Preparar un desfile de moda", completada: false},
  {nombre: "Cuidar a sus mascotas", completada:false},
  {nombre: "Hacer ejercicio en su gimnasio", completada:false},
  {nombre: "Ir de compras para actualizar su guardarropa", completada:false},
  {nombre: "Estudiar para su próxima aventura", completada:false},
  {nombre: "Ayudar a su comunidad en proyectos voluntarios", completada:false},
  {nombre: "Organizar una fiesta de cumpleaños", completada:false},
  {nombre: "Diseñar ropa y accesorios", completada:false},
  {nombre: "Viajar por el mundo en su jet privado", completada:false},
  {nombre: "Participar en competencias deportivas", completada:false},
];
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const searchInput = document.querySelector("#searchInput");

const showTasks = (lista = tasks) => {
  taskList.innerHTML = ""; //limpiamos la lista de tareas
  lista.forEach((task, index) => {
    // cargamos la lista de tareas con el array
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.nombre}</span>
      <div>
        <button onclick="editTask(${index})">🖊</button>
        <button onclick="removeTask(${index})">❌</button>
      </div>`;
    taskList.appendChild(li);
  });
};

const editTask = (index) => {
  //funcion que nos permite editar las tareas del usuario
  const nuevoTexto = prompt("Editar tarea", tasks[index].nombre).trim();
  if (nuevoTexto == "") return alert("Tarea vacia");
  tasks[index].nombre = nuevoTexto;
  showTasks();
};

const removeTask = (index) => {
  //eliminamos una tarea del arreglo y actualizamos la vista
  tasks.splice(index, 1); //elimina un elemento en especifico
  showTasks();
};

const addTask = () => {
  taskInput.value = taskInput.value.trim();
  if (taskInput.value == "") return alert("Tarea vacia");
  tasks.push(taskInput.value);
  taskInput.value = "";
  showTasks();
};

const searchTasks = () => {
  //buscamos las palabras que ingresen en nuestro input
  const filteredTasks = tasks.filter((task) =>
    task.nombre.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showTasks(filteredTasks);
};

window.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", addTask);
  searchInput.addEventListener("input", searchTasks);
  showTasks();
});
