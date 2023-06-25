<template>
	<div class="c1">
		<h3>子组件1</h3>
		<el-button
			type="primary"
			@click="$emit('update:modelValue', modelValue * 2)"
			>X2</el-button
		>
		<div>收到的count:{{ modelValue }}</div>
		<div>
			pageNo:<input
				:value="pageNo"
				@input="
					$emit('update:pageNo', ($event.target as HTMLInputElement)?.value)
				"
			/>
		</div>
		<div>
			pageSize:<input
				:value="pageSize"
				@input="
					$emit('update:pageSize', ($event.target as HTMLInputElement)?.value)
				"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps(["modelValue", "pageNo", "pageSize"]);
defineEmits(["update:modelValue", "update:pageNo", "update:pageSize"]);
</script>

<style scoped>
.c1 {
	width: 200px;
	height: 200px;
	border: 1px solid #1980ff;
}
</style>
