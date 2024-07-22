import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import AppLogo from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const Login = () => {
	return (
		<section className="w-full bg-white min-h-screen flex flex-col">
			<nav className="flex items-center space-x-2 px-4">
				<AppLogo className="h-10 w-10 md:h-12 md:w-12" />
				<h1 className="text-xl font-semibold text-zinc-900">Devposting</h1>
			</nav>
			<div className="container flex flex-col justify-start mt-24 items-center px-4 md:px-6 flex-1">
				<div className="flex flex-col items-center space-y-4 p-4 text-center">
					<h1 className="text-4xl font-bold text-zinc-900 md:text-5xl tracking-tighter text-balance">
						Login using <br />
						<span className="font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-green-400 bg-clip-text text-transparent bg-300% animate-gradient px-1">
							GitHub{" "}
						</span>{" "}
						<br />
						and discover more
					</h1>
					<p className="text-lg text-zinc-600">
						Ours posts and comments are powered by Markdown
					</p>
				</div>
				<Card className="relative group overflow-hidden rounded-lg w-fit">
					<CardContent className="p-1 bg-gradient-to-r from-green-300 via-blue-500 to-green-400 bg-300% animate-gradient">
						<Button onClick={() => console.log("click")}>
							<GitHubLogoIcon className="mr-2 h-5 w-5" />
							Continue with GitHub
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Login;
