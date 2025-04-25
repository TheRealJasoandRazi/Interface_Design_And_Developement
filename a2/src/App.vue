<template>
  <div class="container">
    <JobList />
    <ApplicationForm /> 
    <ToDoList />
  </div>
</template>


<script>
import JobList from './components/JobList.vue'
import ApplicationForm from './components/ApplicationForm.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    JobList,
    ApplicationForm,
    ToDoList
  }
}
</script>

<style scoped>

.job-list {
  flex: 0 0 30%; /* Makes the JobList take up 30% of the space */
  overflow-y: auto; /* Allows scrolling if content exceeds the allocated space */
}

.application-form {
  flex: 1; /* Takes the remaining space */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
