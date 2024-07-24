import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

type Props = {
	sessionUserId: string;
	postId: string;
};

function WritePost({ sessionUserId, postId }: Props) {
	//state for the textarea
	const [title, setTitle] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	//function for the button
	const postTitle = () => {
		console.log("post title to server");
	};

	//make the textarea grow as we type
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "inherit";
			const computed = window.getComputedStyle(textareaRef.current);
			const height =
				textareaRef.current.scrollHeight +
				Number.parseInt(computed.getPropertyValue("border-top-width")) +
				Number.parseInt(computed.getPropertyValue("border-bottom-width"));
			textareaRef.current.style.height = `${height}px`;
		}
	}, [title]); //need this dependency

	return (
		<Card>
			<CardHeader>
				<CardTitle>Write Post</CardTitle>
				<CardDescription>You can write a post in MD</CardDescription>
			</CardHeader>
			<CardContent>
				<Textarea
					ref={textareaRef}
					placeholder="Type your post here..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="mb-2"
				/>
			</CardContent>
			<CardFooter>
				<Button onClick={postTitle}>Post</Button>
			</CardFooter>
		</Card>
	);
}

export default WritePost;
