<template>
    <div>
        <h3>等边面线图</h3>
        <div :ref="map" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const map = ref()
console.log('map=>', map)
</script>

<style>

</style>