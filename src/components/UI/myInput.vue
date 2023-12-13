<template>
    <div class="container">
        <div class="input-field col s6">
            <label for="first_name">serch</label>
            <input :value="modelValue" @input="updateInput" class="inp" placeholder="введите текст" type="text">
        </div>
    </div>
</template>

<script>
    export default {
        name:'my-input',
        props:{
            modelValue: [String, Number]
        },
        methods:{
            updateInput(event){
                this.$emit("update:modelValue",event.target.value)
            }
        }
}
</script>

<style>
    .inp{
        width: 90%;
        bottom: 1px solid teal;
        padding: 18px 15px;
        margin-top: 15px;
    }
</style>