<template>
    <div>
        404
        <h1> The {{ resource }} is not here</h1>
        <router-link :to="{ name: 'event-list' }"> Back to home page </router-link>
    </div>
</template>

<script>
    export default {
        props: ['resource']
    }
</script>

<style scoped>

</style>
