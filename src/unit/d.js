let layerCodeArr = [
	{
		// 上限位报警
		comkey: "@com_af9f58c244994e4c9985bba42d32d052",
		type: "56",
	},
	{
		// 内限位报警
		comkey: "@com_d0ea0b7c21a749908719aad5be39e1dc",
		type: "57",
	},
	{
		// 外限位报警
		comkey: "@com_40f4d88fb0cf48e894681aeb1ab6b8a9",
		type: "58",
	},
	{
		// 重量报警
		comkey: "@com_515f040690cc4d2eadf6eca996b58af3",
		type: "59",
	},
	{
		// 风速报警
		comkey: "@com_2f013769f2b64e3ca5eaf499ca611eea",
		type: "63",
	},
	{
		// 倾角报警
		comkey: "@com_b31ad4d5ad77437ea1b922cedc28afbf",
		type: "60",
	},
	{
		// 塔机群碰撞报警
		comkey: "@com_298c8ead2c354b28aff69cca01c85e06",
		type: "61",
	},
	{
		// 塔吊大风报警
		comkey: "@com_70c97f7bf8164fd1a84127abddb15fa4",
		type: "62",
	},
	{
		// 安全帽监测
		comkey: "@com_1b0b6e667cdf40218a610aa177945e4f",
		type: "64",
	},
];

const filterDataFn = (data) => {
	let filterData = layerCodeArr.map((item) => {
		let matchingData = data.filter((d) => d.props.alarmTypeCode === item.type);
		return {
			comkey: item.comkey,
			data: matchingData,
		};
	});
	return filterData;
};

let timer = setInterval(() => {
	YunliMap.getFeatureByFilter({
		layerCode: "cim_platform_20230113111325401695228261564416",
		needPolygon: true,
		apiParam: {
			sqlApiCode: "SI-1634082922997465088",
			industryCode: "BUILDING",
		},
		callback: (data) => {
			if (!data) {
				return;
			}
			let filterData = filterDataFn(data);
			filterData.forEach((item) => {
				let pointData = item.data.lenght ? item.data : "1";
				comList
					.get(item.comkey)
					.instance?.layer_instance._initFeatures(pointData);
			});
		},
	});
}, 5000);

let alarmKey = "@com_u4n53hu8GPuEU8Q6SE8RWv";

// 单点渲染
window.globalEventEmitter.on("onAlarmClick_2784", (e) => {
	YunliMap.getFeatureByFilter({
		layerCode: "cim_platform_20230113111325401695228261564416",
		needPolygon: true,
		apiParam: { sqlApiCode: "SI-1666995388013862912", alarmId: `${e.alarmId}` },
		callback: (data) => {
			if (!data) {
				return;
			}
			comList.get(alarmKey).instance?.layer_instance._initFeatures(data); //获取对应图层，单点渲染
		},
	});
});

window.globalEventEmitter.on("hideAlarmLayer_2784", () => {
	comList.get(alarmKey).instance.hide();
	comList.get(alarmKey).instance.show();
});

window.globalEventEmitter.on("clearAsync", () => {});

window.addEventListener("hashchange", () => {
	let currentPath = window.location.hash;
	console.info("currentPath=>", currentPath);
	clearInterval(timer);
});
