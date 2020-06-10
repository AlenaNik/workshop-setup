<template>
    <div>
        <label v-if="label"> {{ label }}</label>
        <input @input="updateValue" :value="value" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value)
            }
        },
        value: [String, Number]
    }
</script>

<style scoped>

</style>
