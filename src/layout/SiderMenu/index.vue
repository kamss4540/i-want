<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		class="SiderMenu"
		text-color="#fff"
		@open="handleOpen"
		@close="handleClose"
		:router="true"
	>
		<template v-for="item in menus">
			<template v-if="item.children && item.children.length > 0">
				<el-sub-menu :index="item.value">
					<template #title>
						<el-icon><location /></el-icon>
						<span>{{ item.name }}</span>
					</template>
					<template v-for="j in item.children">
						<template v-if="j.children && item.children.length > 0">
							<el-menu-item :index="j.value" @click="onMenuItemClick">{{
								j.name
							}}</el-menu-item>
						</template>
						<template v-else>
							<el-menu-item :index="j.value">{{ j.name }}</el-menu-item>
						</template>
					</template>
				</el-sub-menu>
			</template>
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

interface MenuItem {
	name: string;
	value: string;
	children?: MenuItem[];
}

const menus: MenuItem[] = [
	{
		name: "GIS",
		value: "GIS",
		children: [
			{
				name: "等边面线图",
				value: "/dbxmt",
			},
			{
				name: "待定",
				value: "待定",
				children: [
					{
						name: "三级菜单",
						value: "三级菜单",
					},
				],
			},
		],
	},
	{
		name: "CSS",
		value: "CSS",
		children: [
			{
				name: "...",
				value: "...",
			},
		],
	},
];

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

const onMenuItemClick = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>

<style></style>
