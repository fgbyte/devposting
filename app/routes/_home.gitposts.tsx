import { Separator } from "@radix-ui/react-separator";
import { useNavigation } from "@remix-run/react";
import PostSearch from "~/components/post-search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const GitPosts = () => {
	const navigation = useNavigation();

	const isSearching = Boolean(
		navigation.location &&
			new URLSearchParams(navigation.location.search).has("query"), // means that I typing something in the search bar and my page is reloading
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
					<PostSearch isSearching={isSearching} searchQuery={""} />
					{/* <Post>
						<ViewLikes />
						<ViewComments />
					</Post> */}
				</TabsContent>
				<TabsContent value="write-posts">{/* <WritePost /> */}</TabsContent>
			</Tabs>
		</div>
	);
};

export default GitPosts;
