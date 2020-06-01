<template>
    <div>
       <h1> Event Show #{{ event.title }}</h1>
        <p>{{ event.description }} by {{ event.organizer }} starts at {{ event.time }} </p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
       props: ['id'],
       created() {
           this.$store.dispatch('fetchIndividualEvent', this.id)
       },
        computed: {
            ...mapState(['event'])
        }
    }
</script>

<style scoped>

</style>
