import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "root",
			component: () => import("@/layout/Layout.vue"),
			redirect: "/h",
			children: [
				{
					path: "/example",
					name: "example",
					component: () => import("@/views/example/Example.vue"),
					children: [
						{
							path: "/example/dbmxt",
							name: "dbmxt",
							component: () => import("@/views/example/gis/Dbmxt.vue"),
						},
					],
				},
				{
					path: "/h",
					name: "h",
					component: () => import("@/views/HomeView.vue"),
				},
			],
		},
	],
});

export default router;
