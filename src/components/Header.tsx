import { BiSolidUser } from "react-icons/bi";

export default function Header() {
	return (
		<div className="flex justify-between fixed top-0 w-full p-3 text-white bg-slate-600">
			<div className="logo">
				<h2>Ms. Dung</h2>
			</div>
			<nav>
				<div className="flex items-center gap-2 ">
					<h2>Hi, Tom</h2>
					<BiSolidUser />
				</div>
			</nav>
		</div>
	);
}
