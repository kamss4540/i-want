<template>
    <div>
        <h3>pinia demo</h3>
        <div>
            <div>current:{{ Test.current }}</div>
            <div>name:{{ Test.name }}</div>
            <el-button v-on:click="onClick" >+1</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from "@/stores"
const Test = useTestStore()

const onClick = () => {
    // Test.current++
    // Test.$patch({
    //     current: 18,
    //     name: '通过patch修改'
    // })
    // Test.$patch(state => {
    //     state.current = 999,
    //     state.name = "雨花石"
    // })
    Test.setCurrent(Test.current * 2)
}
</script>

<style>

</style>