<template>
    <div>
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }

    h2 {
        color: #C9302C;
    }
</style>
