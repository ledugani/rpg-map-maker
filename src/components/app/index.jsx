import React from "react";
import useDraggable from "../../hooks/use-draggable";

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
	>
		<div
			style={{
				position: "absolute",
				border: "1px solid black",
				top: position.y,
				left: position.x,
				zIndex: 100,
				width: 200,
				height: 200,
				backgroundColor: "white"
			}}
		>
			<img id="handle" src="/img/drag-handle.png" alt=""/>
		</div>
	</div>;
}
