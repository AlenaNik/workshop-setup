import axios from 'axios'

const apiClient = axios.create({
    baseURL:  'http://localhost:3000',
    widthCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents: function () {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}
