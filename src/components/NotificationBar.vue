<template>
    <div :class="notificationTypeClass">
       {{ notification.message }}
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
    data() {
        return {
            timeout: null
        }
    },
    mounted() {
        this.timeout = setTimeout(() => this.remove(this.notification), 5000)
    },
    props: {
        notification: {
            type: Object,
            required: true
            }
        },
        computed: {
            notificationTypeClass() {
                return `--text-${this.notification.type}`
            }
        },
        methods: mapActions('notification', ['remove'])
    }
</script>

<style scoped>
.--text-success {
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    border: 1px solid lightgreen;
}
.--text-error {
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    border: 1px solid lightcoral;
}

</style>
