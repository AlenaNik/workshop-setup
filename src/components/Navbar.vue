<template>
    <div id="nav">
        <router-link to="/" class="brand">Real World Events</router-link>
        <router-link to="/home" class="brand">Home page</router-link>
      <nav>
          <router-link :to="{ name: 'event-list'}">List</router-link>
          <router-link :to="{ name: 'event-create'}">Event create</router-link>
      </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
