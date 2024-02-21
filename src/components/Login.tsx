import { BiSolidKey, BiSolidUser } from "react-icons/bi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = () => {
		// Perform login logic here
		// Example: validate username and password
		// Assuming successful login, navigate to the home component
		navigate("/home");
	};
	return (
		<div className="relative h-screen w-full flex items-center justify-center">
			<div className="absolute inset-0 bg-[url('./assets/images/bg-login.jpg')]  blur-md filter bg-cover bg-center -z-10"></div>
			<div className="bg-[#ffffff57] rounded-xl min-w-[450px] border-2 border-[#ffffff1a] border-solid shadow-lg  p-8">
				<h2 className="uppercase text-center font-bold text-slate-600 text-2xl mb-4">
					Login
				</h2>

				<form action="">
					<div className="flex flex-col relative mb-4">
						<label
							htmlFor="username "
							className="text-slate-600 text-[14px] mb-1"
						>
							Username:
						</label>
						<input
							type="text"
							placeholder="Username..."
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="h-[50px] px-3 rounded-xl outline-none pl-[40px] border border-[#ffffffbf] border-solid transition-all duration-500 text-slate-600 bg-[#ffffff75] peer focus:ring-0 focus:border-blue-600"
						/>
						<BiSolidUser className="absolute bottom-[15px] left-[10px] text-2xl text-slate-600" />
					</div>
					<div className="flex flex-col relative mb-4">
						<label
							htmlFor="password "
							className="text-slate-600 text-[14px] mb-1"
						>
							Password:
						</label>
						<input
							type="password"
							placeholder="Password..."
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="h-[50px] px-3 rounded-xl outline-none pl-[40px] border border-[#ffffffbf] border-solid transition-all duration-500 text-slate-600 bg-[#ffffff75] peer focus:ring-0 focus:border-blue-600"
						/>
						<BiSolidKey className="absolute bottom-[12px] left-[10px] text-2xl text-slate-600" />
					</div>
					<div className="text-center">
						<button
							onClick={handleLogin}
							className="bg-slate-600 text-white transition-all px-8 py-2 rounded-full shadow hover:text-slate-600 hover:bg-white"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
