<script setup lang="ts">
import SiderMenu from "@/layout/SiderMenu/index.vue";
import Header from "@/layout/Header/index.vue";
</script>

<template>
	<div class="common-layout">
		<el-container>
			<el-header><Header /></el-header>
			<el-container class="bottomContainer">
				<el-aside width="200px" class="leftSider">
					<SiderMenu />
				</el-aside>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style lang="less" scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.bottomContainer {
	height: calc(100vh - 60px);

	.leftSider {
		height: 100%;
		background: #545c64;
	}
}
</style>
