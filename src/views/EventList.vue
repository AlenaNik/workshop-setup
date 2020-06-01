<template>
    <div>
        <h1>Event List</h1>
        <EventCard v-for="(event, idx) in events"
                   :key="idx"
                   :event="event"
        />
        <template v-if="page != 1">
            <router-link :to="{name: 'event-list', query: { page: page - 1}}" rel="prev">Prev page  |</router-link>
        </template>
        <template v-if="hasNextPage">
            |
        </template>
        <router-link
                v-if="hasNextPage"
                :to="{name: 'event-list', query: { page: page + 1}}" rel="next">Next page</router-link>

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
            this.perPage = 3
            this.$store.dispatch('fetchEvents', {
                page: this.page,
                perPage: this.perPage
            })
        },
        computed: {
            page() {
                return parseInt(this.$route.query.page) || 1
            },
            hasNextPage() {
                return this.eventsTotal > this.page * this.perPage
            },
            ...mapState(['events', 'eventsTotal'])
        }
    }
</script>

<style scoped>

</style>
