<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        background-color: #ffa234;
        color: #fff;
        width: 20%;
        height: 30px;
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
        display: grid;
        place-items: center;
        border: 1px solid transparent;
        border-radius: .25rem;
        padding: 0 .8rem;
    }
</style>
