<template>
    <div class="btn" @click="myClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['myClick']
    }
</script>

<style scoped>
.btn {
    margin-top: 10px;
    padding: 10px 20px;
    width: 20%;
    text-align: center;
    box-shadow: #c1c4d0 0 2px 4px 0;
    background-color: #fff;
    border-radius: 6px;
}

</style>
