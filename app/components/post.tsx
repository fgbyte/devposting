import { Link } from "@remix-run/react";
import ReactMarkdown from "react-markdown";
import AppLogo from "./app-logo";
import { Card } from "./ui/card";

export type PostProps = {
	avatarUrl: string;
	name: string;
	id: string;
	username: string;
	title: string;
	dateTimeString: string;
	userId: string;
	children?: React.ReactNode;
};

const Post: React.FC<PostProps> = ({
	avatarUrl,
	name,
	id,
	username,
	title,
	dateTimeString,
	userId,
	children,
}) => {
	return (
		<Card className="rounded-lg shadow-md overflow-hidden min-h-[12rem]">
			<div className="flex">
				<div className="p-4 md:p-8 w-full">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<img
								alt="Profile"
								className="w-10 h-10 rounded-full"
								src={avatarUrl}
								style={{ objectFit: "cover", aspectRatio: "1/1" }}
							/>
							<div className="ml-4">
								<div className="text-sm md:text-lg font-semibold">
									<Link to={`/profile/${username}`}>{name}</Link>
								</div>
								<div className="text-sm md:text-md text-gray-400">
									<Link to={`/profile/${username}`}>@{username}</Link>
								</div>
							</div>
						</div>
						<AppLogo className="h-8 w-8" />
					</div>
					<div className="mt-4 text-gray-500 text-sm prose">
						<ReactMarkdown>{title}</ReactMarkdown>
					</div>
					<div className="flex mt-6 justify-between items-center">
						<div className="flex space-x-4 text-gray-400">{children}</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Post;
