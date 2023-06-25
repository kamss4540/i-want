<template>
	<router-view v-slot="{ Component }">
		<!-- <transition :name="transitionName"> -->
			<component :is="Component" />
		<!-- </transition> -->
	</router-view>
</template>

<script lang="ts" >
import { reactive, toRefs } from "vue";
// import { useRouter } from "vue-router";
export default {
	setup() {
		const state = reactive({
			transitionName: "slide-left",
		});
	

		return {
			...toRefs(state),
		};
	},
};
</script>

<style lang="less" scoped></style>
