import React from 'react'
import Check from "../Code/Check"
import Copy from "../Code/Copy"

export default function Icon ({ id, ...props }) {
	const icons = { 
		copy: Copy,
		check: Check,
	}
	const component = icons[id] || null;

	if(!component) return null;

	return (
		<div className={`svg ${id}`}>
			{ React.createElement(component, props) }
		</div>
	)
}