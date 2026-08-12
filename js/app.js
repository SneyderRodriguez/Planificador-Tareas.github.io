const taskName = document.querySelector("#task-name");
const taskCategory = document.querySelector("#task-category");
const taskPriority = document.querySelector("#task-priority");
const taskDescription = document.querySelector("#task-description");
const taskStartDate = document.querySelector("#task-start-date");
const taskEndDate = document.querySelector("#task-end-date");
const form = document.querySelector("#task-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = taskName.value;
    const category = taskCategory.value;
    const priority = taskPriority.value;
    const description = taskDescription.value;
    const startDate = taskStartDate.value;
    const endDate = taskEndDate.value;

    const data = {
        name,
        category,
        priority,
        description,
        startDate,
        endDate
    };

    console.log("Datos:", data);
    const errorMessage= validFormFieldInput(data);
        if (errorMessage !== null) {
        Swal.fire({
            title: "Datos inválidos",
            text: errorMessage,
            icon: "error"
        });
        return;
    }
    console.log("Formulario válido");
})

function validFormFieldInput(data) {
    if (data.name.trim() === "") {
        return "Añade un Titulo a la Tarea";
    }
    if (data.category.trim() === "") {
        return "Selecciona una Categoria";
    }
    if (data.priority.trim() === "") {
        return "Selecciona la Prioridad de la Tarea";
    }
    if (data.description.trim() === "") {
        return "Añade la descripción de la tarea";
    }
    if (data.startDate.trim() === "") {
        return "Selecciona la Fecha de Inicio";
    }
    if (data.endDate.trim() === "") {
        return "Selecciona la Fecha de Fina";
    }
    return null;
}