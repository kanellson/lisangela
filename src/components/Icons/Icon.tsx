import React from 'react'
import Copy from "../Code/Copy"
import Check from "../Code/Check"


export default function Icon ({id }:{id: any}) {
	const icons = { 
		copy: Copy,
		check: Check,
	}
	// const component = icons[id] || null;
	const myID: "copy" | "check" = id; 
  	const component = icons[myID] || null;

	if(!component) return null;

	return (
		<div className={`svg ${id}`}>
			{ React.createElement(component) }
		</div>
	)
}