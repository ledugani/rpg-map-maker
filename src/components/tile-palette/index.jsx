import React from "react";


export default function TilePalette({ position, size }) {
	const { width, height } = size;
	const tiles = []
	let id = 0

	for(let y = 0; y < height; y = y + 32) {
		const row = []
		for(let x = 0; x < height; x = x + 32) {
			row.push({
				x, y, id: id++
			})
		}
		tiles.push(row)
	}

	return(
		<div
			id="palette"
			style={{
				position: "absolute",
				border: "1px solid black",
				top: position.y,
				left: position.x,
				zIndex: 100,
				backgroundColor: "white"
			}}
		>
			<img id="handle" src="/img/drag-handle.png" alt=""/>
			{
				tiles.map((row, y) => (
					<div style={{ display: "flex "}}>

					</div>
				))
			}
		</div>
	);
}