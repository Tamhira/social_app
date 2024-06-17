import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type === "ADD_POST"){
    newPostList=[action.payload, ...currPostList]
  }
  // For data fetch
  else if (action.type === "ADD_INITIAL_POSTS"){
    newPostList=action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,[]
    // Default_Post_List
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  // For data fetch
  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    // console.log(`deleted item for ${postId}`)
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

// const Default_Post_List = [
//   {
//     id: "1",
//     title: "Going to Manali",
//     body: "Hello guys im going to manali today",
//     reactions: "2",
//     userId: "user-1",
//     tags: ["vacation", "manali", "enjoy"],
//   },
// ];

export default PostListProvider;
