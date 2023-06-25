<template>
	<el-aside width="200px"><Aside /></el-aside>
	<el-main>
		<RouterView />
	</el-main>
</template>

<script setup lang="ts">
import Aside from "@/layout/Aside.vue";
</script>

<style></style>
