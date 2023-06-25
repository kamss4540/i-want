import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

class MapEngine {
	map: object | undefined;

	init(el: HTMLElement) {
		const imageURL =
        "http://t0.tianditu.gov.cn/img_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}" +
        "&tk=b5c3072e0fbc6e75d36e49daab21dc92";
      const imageURLT =
        "http://t0.tianditu.gov.cn/cia_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}" +
        "&tk=b5c3072e0fbc6e75d36e49daab21dc92";
		const _map = new Map({
			view: new View({
				center: [123, 41],
				zoom: 12,
			}),
			layers: [
				// new TileLayer({
				// 	source: new OSM(),
				// }),
				new TileLayer({
					source: new XYZ({
						// url: "http://t0.tianditu.gov.cn/img_c/wmts?T=vec_c&x={x}&y={y}&l={z}&tk=934ac6904a5bffbeeda5f0f5d776a402",
						// url: "http://t2.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&tk=934ac6904a5bffbeeda5f0f5d776a402&TILECOL={x}&TILEROW={y}&TILEMATRIX=12",
						// url: "http://t3.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&tk=934ac6904a5bffbeeda5f0f5d776a402&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
						url: imageURLT,
						projection: "EPSG:4326",
					}),
				}),
			],
			target: el,
			
		});
		this.map = _map;
	}
}

export default MapEngine;
