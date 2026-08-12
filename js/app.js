const taskName = document.querySelector("#task-name");
const taskDescription = document.querySelector("#task-description");
const taskStartDate = document.querySelector("#task-start-date");
const taskEndDate = document.querySelector("#task-end-date");
const form = document.querySelector("#task-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = taskName.value;
    const description = taskDescription.value;
    const startDate = taskStartDate.value;
    const endDate = taskEndDate.value;

    const data = {
        name,
        description,
        startDate,
        endDate
    };

    console.log("Datos:", data);
    console.log(validFormFieldInput(data));
})

function validFormFieldInput(data) {
    if (data.name.trim() === "") {
        return false;
    }
    if (data.description.trim() === "") {
        return false;
    }
    if (data.startDate.trim() === "") {
        return false;
    }
    if (data.endDate.trim() === "") {
        return false;
    }
    return true;
}