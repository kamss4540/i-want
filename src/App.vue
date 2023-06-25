<template>
	<div class="common-layout">
		<el-container class="">
			<el-header><Header /></el-header>
			<el-container>
				<el-aside width="200px"><Aside /></el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Aside from '@/layout/Aside.vue'
</script>

<style scoped lang="scss">
.common-layout {
	height: 100%;
}
.el-container {
	height: 100%;
}
</style>
