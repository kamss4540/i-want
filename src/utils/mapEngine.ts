import { XYZ } from "ol/source";
import "ol/ol.css";
import { Map, View, Feature } from "ol";
import { Tile } from "ol/layer";
import { Style, Icon } from "ol/style";
import { Point } from "ol/geom";
import logo from "@/assets/积水点预警.png";
import type { Coordinate } from "ol/coordinate";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

class MapEngine {
	instance!: Map;
	keys: [string] = ["b5c3072e0fbc6e75d36e49daab21dc92"];

	init(el: HTMLElement) {
		// 默认加载天地图底图
		let defaultLayer = new Tile({
			source: new XYZ({
				url: "http://t4.tianditu.com/DataServer?T=vec_w&tk=b5c3072e0fbc6e75d36e49daab21dc92&x={x}&y={y}&l={z}",
			}),
		});
		// 默认加载天地图标注
		var defaultMark = new Tile({
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
		this.instance = _map;
	}

	Piont(coordinate: Coordinate) {
		let iconStyle = new Style({
			image: new Icon({
				src: logo,
				size: [50, 56],
				anchor: [0.5, 45 / 56],
			}),
		});
		let feature = new Feature({
			geometry: new Point(coordinate),
			name: "point",
		});
		feature.setStyle(iconStyle);
		let vectorlayer = new VectorLayer({
			source: new VectorSource({
				features: [feature],
			}),
		});
		return vectorlayer;
	}
}

export default MapEngine;
