<template>
    <div>
       <h1> Event Show #{{ event.title }}</h1>
        <p>{{ event.description }} by {{ event.organizer }} starts at {{ event.time }} </p>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
       props: ['id'],
       created() {
           this.fetchIndividualEvent(this.id)
       },
        computed: {
            ...mapState({
                event: state => state.event.event
            })
        },
        methods: mapActions('event', ['fetchIndividualEvent'])
    }
</script>

<style scoped>

</style>
