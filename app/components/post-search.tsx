import { Form, useSubmit } from "@remix-run/react";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

type Props = {
	searchQuery: string | null;
	isSearching: boolean;
};

const PostSearch: React.FC<Props> = ({ searchQuery, isSearching }) => {
	//*** Input state ***
	const [query, setQuery] = useState(searchQuery || "");

	//*** Form submit ***
	const submit = useSubmit();
	const formRef = useRef<HTMLFormElement>(null); //null is the initial value
	const timeoutRef = useRef<NodeJS.Timeout>(); // for the debouncing timeout

	useEffect(() => {
		//Cleanup the timeout
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current); //clear the timeout
			}
		};
	}, []); //Only run on mount, this avoid previous timeouts from running

	return (
		<div className="flex justify-between items-center my-3">
			<h2 className="md:text-xl font-heading font-semibold w-7/12">
				{query ? `Results for "${query}"` : "All posts"}
			</h2>
			<div className="w-1 12 flex justify-center">
				{isSearching && <Loader2 className="h-4 w-4 animate-spin" />}
			</div>
			<Form
				role="search"
				ref={formRef}
				id="search-form"
				className="w-4/12 flex"
				onChange={() => {
					//implement the debounce
					if (timeoutRef.current) {
						//if there is a timeout running
						clearTimeout(timeoutRef.current); //clear the timeout
					}
					//set a new timeout
					timeoutRef.current = setTimeout(() => {
						if (formRef.current) {
							submit(formRef.current); //submit the form
						} else {
							console.error("Your code sucks!!");
						}
					}, 250); //wait 250ms before submitting the form
				}}
			>
				<Input
					type="search"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.currentTarget.value)}
					placeholder="Search posts..."
				/>
			</Form>
		</div>
	);
};

export default PostSearch;
