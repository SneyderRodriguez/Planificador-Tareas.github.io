class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, category, priority, description, startDate, dueDate) {
        this.currentId++;
        this.tasks.push({
            id: this.currentId,
            name: name,
            category:category,
            priority:priority,
            description: description,
            startDate:startDate,
            dueDate: dueDate,
            status: 'POR HACER'
        });
    }
}