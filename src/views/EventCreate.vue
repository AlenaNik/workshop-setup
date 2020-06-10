<template>
    <div>
        <h4>Create an event</h4>
        <form @submit.prevent="createEvent">
            <label>Select a category</label>
            <select v-model="event.category">
                <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>
            <h3>Describe your event</h3>
            <BaseInput label="Title"
            v-model="event.title"
            placeholder="Title"
            type="text"
            class="field"
            ></BaseInput>
            <div class="field">
                <BaseInput label="Description"
                           v-model="event.description"
                           placeholder="Add an event description"
                           type="text"
                           class="field"
                ></BaseInput>
            </div>
            <h3>Where is your event?</h3>
            <div class="field">
                <BaseInput label="Location"
                           v-model="event.location"
                           placeholder="Add a location"
                           type="text"
                           class="field"
                ></BaseInput>
            </div>
            <h3>When is your event?</h3>
            <div class="field">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date"></datepicker>
            </div>
            <div class="field">
                <label>Select a time</label>
                <select v-model="event.time">
                    <option v-for="time in times" :key="time">{{ time }}</option>
                </select>
            </div>
            <input type="submit" class="button -fill-gradient" value="Submit">
        </form>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import EventService from '../services/EventService'
import BaseInput from '../components/BaseInput.vue';
    export default {
        data() {
            const times = []
            for (let i = 1; i <= 24; i++) {
                times.push(i + ':00')
            }
            return {
                times,
                categories: this.$store.state.categories,
                event: this.createFreshEventObject()
            }
        },
        components: {
            Datepicker,
            BaseInput
        },
        methods: {
            createEvent() {
              this.$store.dispatch('event/createEvent', this.event)
                  .then(() => {
                      this.$router.push({
                          name: 'event-show',
                          params: {id: this.event.id}
                      })
                  this.event = this.createFreshEventObject()
              }).catch(() => {

                }
              )
            },
            createFreshEventObject() {
                const user = this.$store.state.user.user
                const id = Math.floor(Math.random() * 100000000)

                return {
                    id: id,
                    user: user,
                    category: '',
                    organizer: user.name,
                    title: '',
                    description: '',
                    location: '',
                    date: '',
                    time: '',
                    attendees: []
                }
            }
        }
    }
</script>

<style scoped>

</style>
