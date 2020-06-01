<template>
    <div>
        {{ incrementBy }}
        {{ this.$store.state }}
        <BaseButton :myClick="incrementEmoji"> Click me </BaseButton>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                incrementBy: '😋'
            }
        },
        methods: {
            incrementEmoji() {
                this.$store.dispatch('updateEmoji', this.incrementBy)
            }
        }
    }
</script>

<style scoped>

</style>
