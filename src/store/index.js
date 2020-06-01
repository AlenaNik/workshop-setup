import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_TOTAL_EVENTS(state, totalEvents) {
      state.eventsTotal = totalEvents
    },
    SET_INDIVIDUAL_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({commit}, {perPage, page}) {
      EventService.getEvents(perPage, page).then(res => {
        commit('SET_EVENTS', res.data)
        commit('SET_TOTAL_EVENTS', parseInt(res.headers['x-total-count']))
      }).catch(err => {
        console.error(err)
      })
    },
    fetchIndividualEvent({commit, getters}, id) {
      let event = getters.getEventById(id)
      if (event) {
        commit('SET_INDIVIDUAL_EVENT', event)
      } else {
        EventService.getEvent(id).then(res => {
          commit('SET_INDIVIDUAL_EVENT', res.data)
        })
            .catch(err => {
              console.error(err)
            })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
