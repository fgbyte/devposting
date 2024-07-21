import type { MetaFunction } from "@remix-run/node";
import AppLogo from "~/components/app-logo";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<section className="w-full bg-white min-h-screen flex flex-col">
			<nav className="flex items-center space-x-2 px-4">
				<AppLogo className="h-8 w-8 md:h-10 md:w-10" />
			</nav>
		</section>
	);
}
