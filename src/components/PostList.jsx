import { useContext, useEffect, useState } from "react";
import Welcome from "./WelcomeMessage";
import Loading from "./Loading";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);
  // For data fetch
  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };
  return (
    <>
      <div className="postList ">
        {fetching && <Loading></Loading>}
        {/* For data fetch */}
        {!fetching && postList.length === 0 && <Welcome></Welcome>}
        {/* For normal data + data fetch */}
        {!fetching && postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default PostList;
