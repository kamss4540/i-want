import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/index.vue";
import Dbxmt from "@/pages/gis/dbxmt/index.vue";
// import Vue3Api from "@/pages/vue3Api/index.vue";
import Demo1 from "@/pages/vue3Api/demo1/father.vue";
import Demo2 from "@/pages/vue3Api/demo2/father.vue";
import Demo3 from "@/pages/vue3Api/demo3/parent.vue";
import Demo4 from "@/pages/vue3Api/demo4/demo4.vue";

// import UserHome from './views/UserHome.vue'
// import UserProfile from './views/UserProfile.vue'
// import UserPosts from './views/UserPosts.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
			children: [
				{
					path: "/dbxmt",
					component: Dbxmt,
				},
			],
		},
		{
			path: "/vue3/demo1",
			component: Demo1,
		},
		{
			path: "/vue3/demo2",
			component: Demo2,
		},
		{
			path: "/vue3/demo3",
			component: Demo3,
		},
		{
			path: "/vue3/demo4",
			component: Demo4,
		},
	],
});
