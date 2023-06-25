import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import styles from "./index.module.less";

export default (props) => {
	const {
		data: { tabsKey, selectedKey },
	} = props;
	const [value, setValue] = useState();
	const [tabs, setTabs] = useState([
		{
			label: "气温",
			value: "tem",
		},
	]);

	useEffect(() => {
		if (window.globalEventEmitter) {
			let _tabs = window.getDataByKey(tabsKey);
			fotmatTabs(_tabs);
			setValue(window.getDataByKey(selectedKey));
			window.globalEventEmitter.on(tabsKey, (e) => {
				fotmatTabs(e);
			});
			window.globalEventEmitter.on(selectedKey, (e) => {
				setValue(e);
			});
		}
	}, []);

	const fotmatTabs = (val) => {
		let res = [];
		if (typeof val == "string") {
			res = val.split(",");
		} else if (Array.isArray(val)) {
			res = val;
		}
		setTabs(res);
	};

	const onChange = ({ target: { value } }) => {
		setStoreData(selectedKey, value);
	};

	return (
		<div className={styles.tabContainer}>
			<Radio.Group
				options={tabs}
				onChange={onChange}
				value={value}
				optionType="button"
			/>
		</div>
	);
};
