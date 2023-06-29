import { createRouter, createWebHistory } from "vue-router";

export const routes = [
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
						path: "/example/gis",
						name: "gis",
						title: "GIS",
						children: [
							{
								path: "/example/gis/dbmxt",
								name: "dbmxt",
								title: "等边线面图",
								component: () => import("@/views/example/gis/Dbmxt.vue"),
							},
						],
					},
					{
						path: "/example/vue3",
						name: "vue3",
						title: "vue3",
						children: [
							{
								path: "/example/vue3/pinia",
								name: "pinia",
								title: "pinia",
								component: () => import("@/views/example/vue3/pinia.vue"),
							},
						],
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
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
