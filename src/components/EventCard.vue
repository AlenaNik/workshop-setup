<template>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id:  event.id }}">
    <div class="event-card -shadow">
        <BaseIcon>{{ event.attendees && event.attendees.length}} attending</BaseIcon>
        <span class="eyebrow">@{{ event.time }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <span>"{{ event.description }}" organized by {{ event.organizer }}</span>
        <BaseButton>
            <span slot="emoji">😋</span>
            <span slot="sad-emoji">😢</span>
            </BaseButton>
<!--        <div v-for="(attendy, idx) in event.attendees" :key="idx">-->
<!--            <span>{{ attendy.name }}</span>-->
<!--        </div>-->
    </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            event: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .event-card {
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #fff;
    }
    .event-card:hover {
        transform: scale(1.01);
        background-color: #fff;
        border-radius: 6px;
        box-shadow: #c1c4d0 0 2px 4px 0;
    }
    .event-card > .title {
        margin: 0;
    }
    .event-link {
        color: black;
        text-decoration: none;
        font-weight: 100;
    }
</style>
