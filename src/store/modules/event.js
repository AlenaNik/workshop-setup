import EventService from "../../services/EventService";

export const state = {
    events: [],
    eventsTotal: 0,
    event: {}
}
export const mutations = {
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
}
export const actions  = {
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
}
export const getters = {
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        }
    }
