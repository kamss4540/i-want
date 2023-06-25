<template>
	<div>
		<div>v-modl示例</div>
		<div>pageNo:{{ pageNo }}</div>
		<div>PageSize: {{ pageSize }}</div>
		<input v-model="count" />
		<!-- <Child1 :modelValue="count" @update:modelValue="onchange" /> -->
		<Child1
			v-model="count"
			v-model:pageNo="pageNo"
			v-model:pageSize="pageSize"
		/>
	</div>
</template>

<script setup lang="ts">
import Child1 from "./child1.vue";
import { ref } from "vue";

const count = ref(1);
const pageNo = ref(1);
const pageSize = ref(10);

// const onchange = (e) => {
// 	count.value = e;
// };
</script>
