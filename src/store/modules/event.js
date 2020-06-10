import EventService from "../../services/EventService";

export const namespaced = true

export const state = {
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3
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
        createEvent({commit, dispatch}, event) {
            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event)
                        const notification = {
                            type: 'success',
                            message: 'The event has been created'
                        }
                        dispatch('notification/add', notification, {root: true})
            }).catch(err => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem submitting event: ' + err.message
                }
                dispatch('notification/add', notification, {root: true})
                throw err
            })
        },
        fetchEvents({commit, dispatch, state }, {page}) {
           return EventService.getEvents(state.perPage, page).then(res => {
                commit('SET_EVENTS', res.data)
                commit('SET_TOTAL_EVENTS', parseInt(res.headers['x-total-count']))
            }).catch(err => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + err.message
                }
                dispatch('notification/add', notification, {root: true})
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
            }
        }
}
export const getters = {
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        }
    }
