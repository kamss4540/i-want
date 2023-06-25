<template>
	<div class="c2" >
		<h3>子组件2</h3>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import $bus from "@/bus";
onMounted(() => {
	$bus.on("post", (e) => {
		console.log("收到的信息：", e);
	});
});
</script>

<style>
.c2 {
    width: 200px;
    height: 200px;
    border: 1px solid #1980ff;
}
</style>
