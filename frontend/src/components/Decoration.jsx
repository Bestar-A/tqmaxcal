/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Decoration = ({ width, height, color, spacing }) => {
	useEffect(() => {});
	return (
		<div style={{ width: width, height: height }} className="-z-40">
			Decoration
		</div>
	);
};

export default Decoration;
