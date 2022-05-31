import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./shared/Navbar"
import Home from "./pages/home/Home"

const App = () => {
	return (
		<div className="container mx-auto h-[2000vh]">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
