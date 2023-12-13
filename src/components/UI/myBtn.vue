<template>
    <button class="waves-effect waves-light btn">
        <slot>кнопка</slot>
    </button>
</template>

<script>
export default {
    name:'my-btn'
}

</script>

<style>
    .my-btn{
        background-color: rgb(78, 9, 9);
        width: 120px;
        height: 70px;
        color: antiquewhite;
        align-items: center;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 18px;
        
    }
</style>