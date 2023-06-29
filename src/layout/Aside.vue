<template>
	<el-menu
		@open="handleOpen"
		@close="handleClose"
		v-on:select="handleSelect"
	>
		<template v-for="sub in menus">
			<el-sub-menu :index="sub.path">
				<template #title>
					<el-icon><location /></el-icon>
					<span>{{ sub.title }}</span>
				</template>
				<template v-for="item in sub.children">
					<el-menu-item :index="item.path">
						{{ item.title }}
					</el-menu-item>
				</template>
			</el-sub-menu>
		</template>

		<el-sub-menu index="1">
			<template #title>
				<el-icon><location /></el-icon>
				<span>Navigator One</span>
			</template>
			<el-menu-item-group title="Group One">
				<el-menu-item index="1-1">item one</el-menu-item>
				<el-menu-item index="1-2">item two</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="Group Two">
				<el-menu-item index="1-3">item three</el-menu-item>
			</el-menu-item-group>
			<el-sub-menu index="1-4">
				<template #title>item four</template>
				<el-menu-item index="1-4-1">item one</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="2">
			<el-icon><icon-menu /></el-icon>
			<span>Navigator Two</span>
		</el-menu-item>
		<el-menu-item index="3" disabled>
			<el-icon><document /></el-icon>
			<span>Navigator Three</span>
		</el-menu-item>
		<el-menu-item index="4">
			<el-icon><setting /></el-icon>
			<span>Navigator Four</span>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting,
} from "@element-plus/icons-vue";
import router, { routes } from "@/router";
import { ref } from "vue";
const menus = ref();
menus.value = routes[0].children.find(
	(item) => item.name === "example"
)?.children;
console.log("menus=>", menus);

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

const handleSelect = (key: string, keyPath: string[]) => {
	console.log("handleSelect=>", key, keyPath);
	router.push(key);
};
</script>
