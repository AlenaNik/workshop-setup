<template>
    <div>
       <h1> Event Show #{{ event.title }}</h1>
        <p>{{ event.description }} by {{ event.organizer }} starts at {{ event.time }} </p>
    </div>
</template>

<script>
 import EventService from '../services/EventService'
    export default {
       props: ['id'],
        data() {
            return {
                event: {}
            }
        },
       created() {
           EventService.getEvent(this.id).then(res => {
               this.event = res.data
           })
               .catch(err => {
                 console.error(err)
               })
       }
    }
</script>

<style scoped>

</style>
