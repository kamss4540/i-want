<template>
	<div>
		<h3>父组件</h3>
		<div class="parent">
			<Child1 />
			<Child2 />
		</div>
	</div>
</template>

<script setup lang="ts">
import Child1 from "./child1.vue";
import Child2 from "./child2.vue";
</script>

<style scoped>
.parent {
	width: 600px;
	height: 300px;
	border: 1px solid #333;
	display: flex;
}
</style>
