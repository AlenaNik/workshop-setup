<template>
    <div>
        <h1>Event List</h1>
        <EventCard v-for="(event, idx) in events"
                   :key="idx"
                   :event="event"
        />
    </div>
</template>

<script>
    import EventService from '../services/EventService'
    import EventCard from '../components/EventCard.vue';
    export default {
        components: {
            EventCard
        },
        data() {
            return {
                events: []
            }
        },
            created() {
               EventService.getEvents().
                    then(res => {
                        this.events = res.data
                    console.log(this.data)
                }).catch(err => {
                    console.error(err)
                })
        }
    }
</script>

<style scoped>

</style>
