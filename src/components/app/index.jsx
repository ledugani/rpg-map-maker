import React from "react";
import useDraggable from "../../hooks/use-draggable";
import TilePalette from "../tile-palette";

export default function App() {
	const { position } = useDraggable("handle")

	return <div
		style={{
			position: "relative",
			width: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: "grey",
			overflow: "hidden",
			border: "1px solid black",
		}}
	><TilePalette
	position={position}
	size={{
		height: 288,
		width: 640,
	}}
	/>
	</div>;
}
