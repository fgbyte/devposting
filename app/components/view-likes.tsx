import { Link } from "@remix-run/react";
import { Star } from "lucide-react";

type Props = {
	likes: number;
	likedByUser: boolean;
	pathname: string;
};

const ViewLikes: React.FC<Props> = ({ likes, likedByUser, pathname }) => {
	return (
		<Link to={pathname} className="flex items-center justify-center group">
			<Star
				className={`w-4 h-4 group-hover:text-blue-400 ${likedByUser ? "text-blue-700" : "text-gray-500"}`}
			/>
			<span
				className={`ml-2 text-sm group-hover:text-blue-400 ${likedByUser ? "text-blue-700" : "text-gray-500"}`}
			>
				{likes}
			</span>
		</Link>
	);
};

export default ViewLikes;
