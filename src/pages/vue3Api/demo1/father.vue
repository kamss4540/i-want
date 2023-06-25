<template>
	<div class="father">
		<div>
            <span>父组件</span>
            <span>
                <el-button type="primary" @click="click" >action</el-button>
            </span>
        </div>
		<Son info="加载于father组件" :count="count" />
	</div>
</template>

<script setup lang="ts">
import Son from "./son.vue";
import { ref } from "vue";

let count = ref(123);

const click = () => {
    
}
</script>

<style scoped>
.father {
	width: 300px;
	height: 200px;
	border: 1px solid #333;
}
</style>
