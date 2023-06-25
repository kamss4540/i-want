<template>
	<div class="box">
		<h3>等边面线图</h3>
		<div ref="map" class="mapContariner" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import MapEngine from "@/utils/mapEngine";

const map = ref<HTMLElement>();
let map2d = null;

onMounted(() => {
	console.log("onMounted=>", map);
	map2d = new MapEngine();
	map2d.init(map.value as HTMLElement);
	map2d.map.on('click', e => {
		console.log('e=>', e.coordinate)
	})
	console.log('map2d=>', map2d)
});
</script>

<style scoped lang="scss">
.box {
	height: 100%;
	display: flex;
	flex-direction: column;

	.mapContariner {
		width: 100%;
		height: 100%;
	}
}
</style>
