<template>
	<div class="c1">
		<h3>子组件1</h3>
		<el-button type="primary" @click="onClick">发送</el-button>
	</div>
</template>

<script setup>
import $bus from "@/bus";
const onClick = () => {
	$bus.emit("post", { msg: "vso" });
};
</script>

<style scoped>
.c1 {
	width: 200px;
	height: 200px;
	border: 1px solid #1980ff;
}
</style>
