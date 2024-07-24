import { Link } from "@remix-run/react";
import { MessageCircle } from "lucide-react";

type Props = {
	comments: number;
	pathname: string;
	readonly: boolean;
};

const ViewComments: React.FC<Props> = ({ comments, pathname, readonly }) => {
	return (
		<>
			{readonly ? (
				<div className="flex justify-center items-center group">
					<MessageCircle className="h-4 w-4 text-gray-500" />
					<span className="ml-2 text-sm text-gray-500">{comments}</span>
				</div>
			) : (
				<Link to={pathname} className="flex items-center justify-center group">
					<MessageCircle className="h-4 w-4 text-gray-500 group-hover:text-green-400" />
					<span
						className={"ml-2 text-sm text-gray-500 group-hover:text-green-400"}
					>
						{comments}
					</span>
				</Link>
			)}
		</>
	);
};

export default ViewComments;
