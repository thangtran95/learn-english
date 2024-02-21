import React from "react";
import Header from "./Header";

function Home() {
	return (
		<div className="bg-cover bg-center bg-[url('./assets/images/bg-main.jpg')] relative from-slate-900 to-slate-700 min-h-[100vh]">
			<div className="backdrop-blur-sm w-full">
				<Header />
				<main className=" ">
					<h2>Content</h2>
				</main>
			</div>
		</div>
	);
}

export default Home;
