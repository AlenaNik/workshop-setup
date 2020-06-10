import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate'
import EventList from '../views/EventList'
import EventShow from '../views/EventShow'
import NotFoundPage from '../views/NotFoundPage'
import Home from '../views/Home'
import store from '../store/index'
import NetworkError from "../views/NetworkError";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
              if (error.response && error.response.status == 404) {
                next({ name: '404', params: {resource: 'event'}})
                // HERE CAN GO MORE ERROR HANDLERS
              } else if (error.response && error.response.status == 500) {
                next({ name: 'network-issue'})
              }
          })
    }
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '*',
    redirect: { name: '404', params: {resource: 'page'}}
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundPage,
    props: true
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkError
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
