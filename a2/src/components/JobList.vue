
<script setup>
    import { ref, onMounted } from 'vue'
    
    const jobs = ref([])
    
    onMounted(async () => {
        const res = await fetch('/jobs.txt')
        const text = await res.text()
        jobs.value = JSON.parse(text)
    })
</script>

<template>
    <div style="display: flex;">
        <aside style="width: 200px; border-right: 1px solid #ccc; padding: 1rem;">
        <h3>Job IDs</h3>
        <ul>
            <li>
                <router-link to="/">Overview</router-link>
            </li>
            <li v-for="(job, index) in jobs" :key="index">
            <router-link :to="`/jobs/${job.job_id}`">
                {{ job.job_id }}
            </router-link>
            </li>
        </ul>
        </aside>

        <main style="flex: 1; padding: 1rem;">
        <router-view :jobs="jobs" />
        </main>
    </div>
</template>