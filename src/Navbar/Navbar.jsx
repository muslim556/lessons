import React, {useState} from 'react'
import "./Navbar.css"
export function Navbar() { 
	const [open, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!open)
	}
	return (
		<nav>
			<div id='nav_link'>
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contact</a>
				<a href="">Blog</a>
			</div>
			<div id='button_card'>
				<button onClick={toggle}>Menu</button>
			</div>
			<ul className={open ? "media active" : "media"}>
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Contact</a></li>
				<li><a href="">Blog</a></li>
			</ul>
		</nav>
	)
}