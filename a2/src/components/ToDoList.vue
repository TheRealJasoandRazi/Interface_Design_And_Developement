<template>
    <div class="todo-list">
      <h2>To-Do List</h2>
      <div class="add-task">
        <input
          v-model="newTask"
          placeholder="Enter a task"
          @keyup.enter="addTask"
          aria-label="Enter a new task"
        />
        <button class="btn add-btn" @click="addTask" aria-label="Add task to the list">Add</button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="task-item">
          <span class="task-text">{{ task.text }} ({{ task.priority }})</span>
          <div class="task-actions">
            <button
              class="btn priority-btn"
              @click="togglePriority(index)"
              :aria-label="task.priority === 'High Priority' ? 'Mark task as Low Priority' : 'Mark task as High Priority'"
            >
              {{ task.priority === 'High Priority' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
            </button>
            <button class="btn delete-btn" @click="deleteTask(index)" aria-label="Delete task">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        const trimmedTask = this.newTask.trim();
        if (trimmedTask) {
          this.tasks.unshift({
            text: trimmedTask,
            priority: 'Low Priority'
          });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      togglePriority(index) {
        const task = this.tasks[index];
        task.priority = task.priority === 'High Priority' ? 'Low Priority' : 'High Priority';
      }
    }
  };
  </script>

<style scoped>
.todo-list {
  font-family: 'Arial', sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.add-task {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.add-task input {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-task button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-task button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.task-text {
  font-size: 16px;
  color: #555;
}

.task-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.priority-btn {
  background-color: #ffcc00;
  color: #fff;
}

.priority-btn:hover {
  background-color: #e0b200;
}

.delete-btn {
  background-color: #e74c3c;
  color: #fff;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>