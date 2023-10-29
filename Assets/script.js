const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tareas = []

const tareasPredeterminadas = [
  {idTarea: Date.now(), nombre: "Estudiar Programación (realizada, marcar casilla)"},
  {idTarea: Date.now(), nombre: "Sacar la basura (realizada, marcar casilla)"},
  {idTarea: Date.now(), nombre: "Pensar en que quiero hacer con mi vida (realizada, marcar casilla)"},
  
]

let contador = tareasPredeterminadas.length

btnAgregar.addEventListener("click", () => {
// Solo agrega las tareas predeterminadas una vez
if (!tareas.includes(...tareasPredeterminadas)) {
tareas.unshift(...tareasPredeterminadas)
}

const nuevaTarea = `${tareaInput.value} (realizada, marcar casilla)`
tareas.push({idTarea: Date.now(), nombre: nuevaTarea})
tareaInput.value = ""
// Actualizamos la información en el HTML
let html = ""
for (let tarea of tareas) {
html += `<li data-id-tarea="${tarea.idTarea}">${tarea.nombre} <input type="checkbox" id="check-${tarea.idTarea}" value="1"> <button
onclick="borrar(${tarea.idTarea})"> Eliminar </button> </li>`;
}
listaDeTareas.innerHTML = html;

contador++
// Actualizamos el contador en el HTML
const cuentaEventos = document.querySelector("#cuenta-eventos")
cuentaEventos.innerHTML = `Tareas: ${contador}`;
});

function borrar(idTarea){
const index = tareas.findIndex((ele) => ele.idTarea == idTarea)
tareas.splice(index, 1)
// Actualizamos la información en el HTML
let html = ""
for (let tarea of tareas) {
html += `<li data-id-tarea="${tarea.idTarea}">${tarea.nombre} <input type="checkbox" id="check-${tarea.idTarea}" value="1"> <button
onclick="borrar(${tarea.idTarea})"> Eliminar </button> </li>`;
}
listaDeTareas.innerHTML = html;

contador--
// Actualizamos el contador en el HTML
const cuentaEventos = document.querySelector("#cuenta-eventos")
cuentaEventos.innerHTML = `Tareas: ${contador}`;
}

// Funcion para marcar la casilla de verificación y cambiar el estilo del texto
function marcarTarea(idTarea) {
   
const checkBox = document.getElementById(`check-${idTarea}`)
const tarea = document.querySelector(`li[data-id-tarea="${idTarea}"`)
if (checkBox.checked) {
tarea.style.color = "green"
tarea.classList.add("tarea-completada")
} else {
tarea.style.color = "black"
tarea.classList.remove("tarea-completada")
}
}

// Evento para marcar la casilla de verificación
listaDeTareas.addEventListener("click", (event) => {
if (event.target.type === "checkbox") {
marcarTarea(event.target.id.substring(7))
}
})




















  

  






