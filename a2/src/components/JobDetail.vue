<template>
    <div v-if="job">
      <h2>{{ job.job_title }}</h2>
      <p><strong>Job ID:</strong> {{ job.job_id }}</p>
      <p><strong>Company:</strong> {{ job.company }}</p>
      <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
      <p><strong>Location:</strong> {{ job.location }}</p>
      <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
      <p><strong>Job Level:</strong> {{ job.job_level }}</p>
      <p><strong>Category:</strong> {{ job.category }}</p>
      <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
      <p><strong>Start Date:</strong> {{ job.start_date }}</p>
      <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
      <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
      <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>
      <p><strong>Job Description:</strong></p>
      <p>{{ job.job_description }}</p>
  
      <p><strong>Required Skills:</strong></p>
      <ul>
        <li v-for="(skill, index) in job.required_skills" :key="index">{{ skill }}</li>
      </ul>
  
      <p><strong>Preferred Qualifications:</strong></p>
      <ul>
        <li v-for="(qual, index) in job.preferred_qualifications" :key="index">{{ qual }}</li>
      </ul>
  
      <p><strong>Tags:</strong></p>
      <ul>
        <li v-for="(tag, index) in job.tags" :key="index">{{ tag }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Job not found.</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  // Get the current route
  const route = useRoute()
  
  // Computed property for jobId from the route parameters
  const jobId = computed(() => route.params.id)
  
  // Define props for the jobs array
  const props = defineProps({
    jobs: {
      type: Array,
      required: true,
    },
  })
  
  // Computed property to find the job based on jobId
  const job = computed(() => {
    return props.jobs.find(j => j.job_id === jobId.value)
  })
  
  </script>
  