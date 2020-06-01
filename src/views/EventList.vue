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
    import EventCard from '../components/EventCard.vue';
    import { mapState } from 'vuex'
    export default {
        components: {
            EventCard
        },
        created() {
            this.$store.dispatch('fetchEvents')
        },
        computed: mapState(['events'])
    }
</script>

<style scoped>

</style>
