<template>
    <div>
        <h1>Event for {{ user.user.name }}</h1>
        <EventCard v-for="(event, idx) in event.events"
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
    import { mapState } from 'vuex';
    import store from '../store/index';

    function getPageEvent(routeTo, next) {
        const currentPage = parseInt(routeTo.query.page) || 1
        store.dispatch('event/fetchEvents', {
            page: currentPage
        }).then(() =>  {
            routeTo.params.age = currentPage
            next()
        })
    }
    export default {
        components: {
            EventCard
        },
        props: {
            page: {
                type: Number,
                required: true
            }
        },
        beforeRouteEnter(routeTo, routeFrom, next) {
            getPageEvent(routeTo, next)
        },
        beforeRouteUpdate(routeTo, routeFrom, next) {
            getPageEvent(routeTo, next)
        },
        computed: {
            hasNextPage() {
                return this.event.eventsTotal > this.page * this.event.perPage
            },
            ...mapState(['event', 'user'])
        }
    }
</script>

<style scoped>

</style>
