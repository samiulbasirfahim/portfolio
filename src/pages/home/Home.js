import React from "react"
import ReactTyped from "react-typed"
import useScroll from "../../hooks/useScroll"

const Home = () => {
	const isSticky = useScroll()

	return (
		<div className={"pt-20"}>
			<section className="h-screen w-full justify-center flex items-center fixed top-0 left-0 -z-50">
				<div>
					<p className="text-primary block text-9xl font-bold font-pacifico">
						Samiul Basir Fahim
					</p>
					<div id="textSpring"></div>
					<ReactTyped
						className="text-secondary ml-2 text-5xl font-bold font-sans"
						strings={["Software Developer", "Self Learner"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
			</section>
		</div>
	)
}

export default Home
