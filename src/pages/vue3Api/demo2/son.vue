<template>
	<div class="son">
		<p>
			子组件
			<br />
			<el-button @click="onClick" type="primary"> 触发自定义事件 </el-button>
		</p>
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
let $emit = defineEmits(["customEvent"]);
const onClick = () => {
	$emit("customEvent", "yyds", "123", "456");
};
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
