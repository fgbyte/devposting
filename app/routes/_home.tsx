import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import AppLogo from "~/components/app-logo";
import { Button } from "~/components/ui/button";

const Home = () => {
	//para el button del hamburger menu
	const [isNavOpen, setNavOpen] = useState(false);

	return (
		<section className="w-full bg-white min-h-screen flex flex-col items-center">
			<nav className="sticky top-0 z-10 flex w-full items-center justify-between p-4 border-b border-zinc-200 flex-wrap md:flex-nowrap">
				{" "}
				<Link className="flex items-center space-x-2 px-4" to="/">
					<AppLogo className="h-10 w-10 md:h-12 md:w-12" />
					<h1 className="text-xl font-semibold text-zinc-900">Devposting</h1>
				</Link>
				<button
					type="button"
					onClick={() => setNavOpen(!isNavOpen)}
					className="md:hidden"
				>
					{isNavOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
				</button>
				<div
					className={`flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ${
						isNavOpen
							? "flex-col order-last w-full md:w-auto"
							: "hidden md:flex"
					}`}
				>
					<Link prefetch="intent" to={"/profile/fgbyte"}>
						{/* will be dynamic when integrating the DB */}
						@fgbyte
					</Link>
					<img
						src={"https://avatars.githubusercontent.com/u/71539244?v=4"}
						className="rounded-full"
						height="40"
						width="40"
						style={{ aspectRatio: "40/40", objectFit: "cover" }}
						alt="Profile"
					/>
					<Button>Logout</Button>
				</div>
			</nav>
			<Outlet />
			{/* load the posts */}
		</section>
	);
};

export default Home;
