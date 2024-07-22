import { Link } from "@remix-run/react";
import AppLogo from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function Index() {
	return (
		<section className="w-full bg-white min-h-screen flex flex-col">
			<nav className="flex items-center space-x-2 px-4">
				<AppLogo className="h-10 w-10 md:h-12 md:w-12" />
				<h1 className="text-xl font-semibold text-zinc-900">Devposting</h1>
			</nav>
			<div className="container md:flex justify-center items-center px-4 md:px-6 flex-1">
				<div className="flex flex-col items-center space-y-4 p-4 text-center md:w-1/2">
					<h1 className="text-4xl font-bold text-zinc-900 md:text-5xl tracking-tighter text-balance">
						A{" "}
						<span className="font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-green-400 bg-clip-text text-transparent bg-300% animate-gradient">
							Community-Driven{" "}
						</span>
						& Minimalist Social Network for Devs
					</h1>
					<p className="text-lg text-zinc-600">
						Powered by{" "}
						<a
							href="https://remix.run"
							target="_blank"
							rel="noreferrer"
							className="text-blue-500 font-bold"
						>
							Remix
						</a>{" "}
						and{" "}
						<a
							href="https://supabase.com"
							target="_blank"
							rel="noreferrer"
							className="text-green-600 font-bold"
						>
							Supabase
						</a>
					</p>
					<Button asChild>
						<Link to="/login">Join our Community</Link>
					</Button>
				</div>
				<Card className="relative group overflow-hidden rounded-lg md:w-1/2 hidden">
					{/* <video className="h-full w-full rounded-lg" autoPlay loop muted>
						<source src="assets/videos/demo.mp4" type="video/mp4" />
					</video> */}
					video de la app
				</Card>
			</div>
		</section>
	);
}
