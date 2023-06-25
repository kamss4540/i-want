import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

class MapEngine {
	map: object | undefined;
	keys: [string] = ["b5c3072e0fbc6e75d36e49daab21dc92"];

	init(el: HTMLElement) {
		// 默认加载天地图底图
		let defaultLayer = new TileLayer({
			source: new XYZ({
				url: "http://t4.tianditu.com/DataServer?T=vec_w&tk=b5c3072e0fbc6e75d36e49daab21dc92&x={x}&y={y}&l={z}",
			}),
		});
		// 默认加载天地图标注
		var defaultMark = new TileLayer({
			source: new XYZ({
				url: "http://t4.tianditu.com/DataServer?T=cva_w&tk=b5c3072e0fbc6e75d36e49daab21dc92&x={x}&y={y}&l={z}",
			}),
		});
		const _map = new Map({
			target: el,
			view: new View({
				center: [113.958511, 30.248061],
				zoom: 8,
				maxZoom: 18,
				minZoom: 1,
				projection: "EPSG:4326",
			}),
			layers: [defaultLayer, defaultMark],
		});
		this.map = _map;
	}
}

export default MapEngine;
