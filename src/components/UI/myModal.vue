<template>
    <div v-if="show"  class="modal-wind" @click="closeModal">
    <button @click="closeModal">+</button>
        <div @click.stop class="model-wind--cont">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import showMix from '../../mixins/shomMix'
export default {
    name:'my-modal',
    mixins:[showMix],

}
</script>

<style>
    .modal-wind{
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0 0.5);
        position: fixed;
    }

    .model-wind--cont{
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 60px;
        min-width: 300px;
    }
</style>