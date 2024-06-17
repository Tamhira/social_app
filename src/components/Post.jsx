import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);

  return (
    <>
      <div
        className="card text-bg-dark post-card"
        style={{ width: "35rem" }}
      >
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title h4">
            <div className="h3">{post.title}</div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer" onClick={()=>deletePost(post.id)}>
              <MdDelete />
            </span>
          </h5>
          <p className="card-text ">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary mr-2 my-3">{tag}</span>
          ))}
          {/* For normal data */}
          {/* <div className="alert alert-success" role="alert">
            This post has been reacted by {post.reactions} people.
          </div> */}
          {/* For data fetch */}
          <div className="alert alert-success" role="alert">
            This post has been reacted by {post.reactions.likes} people.
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
