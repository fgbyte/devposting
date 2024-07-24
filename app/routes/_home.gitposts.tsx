import { Separator } from "@radix-ui/react-separator";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import Post from "~/components/post";
import PostSearch from "~/components/post-search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import ViewComments from "~/components/view-comments";
import ViewLikes from "~/components/view-likes";
import WritePost from "~/components/write-post";

//set loaders before the component
export const loader = ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const searchParams = url.searchParams;
	const query = searchParams.get("query");
	// get the query form the search bar and process it on the backend

	return json({ query });
};

const GitPosts = () => {
	const { query } = useLoaderData<typeof loader>();
	//get the query from the backend

	const navigation = useNavigation();
	const isSearching = Boolean(
		navigation.location &&
			new URLSearchParams(navigation.location.search).has("query"), // means that I typing something in the search bar and my page is reloading. If it's true, then the value of isSearching is true
	);

	return (
		<div className="w-full max-w-xl px-4 flex flex-col">
			<Tabs defaultValue="view-posts" className="my-2">
				<TabsList className="grid grid-cols-2 w-full">
					<TabsTrigger value="view-posts">View Posts</TabsTrigger>
					<TabsTrigger value="write-posts">Write Posts</TabsTrigger>
				</TabsList>
				<TabsContent value="view-posts">
					<Separator />
					<PostSearch isSearching={isSearching} searchQuery={query} />
					<Post
						avatarUrl={"https://avatars.githubusercontent.com/u/1019270?v=4"}
						name={"John Doe"}
						username={"johndoe"}
						title={"## Hello Markdown"}
						userId="123456789"
						dateTimeString="20, Nov 2024"
					>
						<ViewLikes
							likes={69}
							likedByUser={true}
							pathname={"profile/fgbyte"}
						/>
						<ViewComments comments={420} pathname="profile/fgbyte" />
					</Post>
				</TabsContent>
				<TabsContent value="write-posts">
					<WritePost sessionUserId="1234" postId="123456789" />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default GitPosts;
