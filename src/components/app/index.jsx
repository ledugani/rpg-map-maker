import React, { useEffect, useState } from "react";
import useDraggable from "../../hooks/use-draggable";
import TilePalette from "../tile-palette";

export default function App() {
	const [tileset, setTileset] = useState("rpg-nature-tileset/spring");
	const [tiles, setTiles] = useState([]);
	const [mapSize, setMapSize] = useState({
		width: 800,
		height: 600,
	});
	const { position } = useDraggable("handle");

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
		<TilePalette
			position={position}
			tileset={tileset}
			size={{
				height: 288,
				width: 640,
			}}
		/>
	</div>;
}
