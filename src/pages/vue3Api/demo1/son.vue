<template>
	<div class="son">
		<p>子组件</p>
		<p>
			<span>info:</span>
			<i>{{ info }}</i>
		</p>
		<p>
			<span>count:</span>
			<i>{{ count }}</i>
		</p>
	</div>
</template>

<script setup lang="ts">
defineProps(["info", "count"]);
</script>

<style scoped>
.son {
	width: 200px;
	height: 150px;
	border: 1px solid #1980ff;
}

i {
	color: chocolate;
}
</style>
