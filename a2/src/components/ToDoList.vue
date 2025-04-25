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
        task.priority = task.priority === 'High Priority' ? 'Low Pr