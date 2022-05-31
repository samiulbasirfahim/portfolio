import React from "react"
import { Link, NavLink } from "react-router-dom"
import useScroll from "../hooks/useScroll"
import { Spring, animated } from "react-spring"

const Navbar = () => {
	const isSticky = useScroll()

	console.log(isSticky)
	const navLinks = (
		<>
			<NavLink
				style={({ isActive } = {}) => ({
					color: isActive ? "#FFBEDA" : "",
					borderBottom: isActive ? "4px solid #FFBEDA" : "none",
				})}
				className="text-xl mx-4 font-bold border-base-content font-mono   "
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				style={({ isActive } = {}) => ({
					color: isActive ? "#FFBEDA" : "",
					borderBottom: isActive ? "4px solid #FFBEDA" : "none",
				})}
				className="text-xl mx-4 font-bold border-base-content font-mono   "
				to="/blogs"
			>
				Blogs
			</NavLink>
			<NavLink
				style={({ isActive } = {}) => ({
					color: isActive ? "#FFBEDA" : "",
					borderBottom: isActive ? "4px solid #FFBEDA" : "none",
				})}
				className="text-xl mx-4 font-bold border-base-content font-mono   "
				to="/about"
			>
				About
			</NavLink>
			<NavLink
				style={({ isActive } = {}) => ({
					color: isActive ? "#FFBEDA" : "",
					borderBottom: isActive ? "4px solid #FFBEDA" : "none",
				})}
				className="text-xl mx-4 font-bold border-base-content font-mono   "
				to="/contact"
			>
				Contact
			</NavLink>
		</>
	)
	return (
		<section className={isSticky ? "block " : "hidden"}>
			<section className="flex justify-between items-center py-8 fixed top-0 container mx-autos">
				<div>
					<Link
						to="/"
						className="font-pacifico font-bold text-2xl hover:text-primary hover:opacity-20"
					>
						Fahim
					</Link>
				</div>
				<div>{navLinks}</div>
				<div>
					<Spring
						loop
						from={{ opacity: 0, color: "red" }}
						to={[
							{ opacity: 1, color: "#ffaaee" },
							{ opacity: 0, color: "rgb(14,26,19)" },
						]}
					>
						{(styles) => (
							<animated.div style={styles}>
								<a
									href="mailto:samiulbasirfahim@outlook.com"
									className="font-pacifico font-bold text-2xl hover:text-primary hover:opacity-20"
								>
									Hire me{">"}{" "}
								</a>
							</animated.div>
						)}
					</Spring>
				</div>
			</section>
		</section>
	)
}

export default Navbar
