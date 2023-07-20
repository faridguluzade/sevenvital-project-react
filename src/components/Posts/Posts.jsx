import PostItem from "../PostItem/PostItem";

import { DUMMY_POSTS } from "../../constants";

import "./Posts.styles.scss";

const Posts = () => {
  return (
    <div className="posts">
      <h3 className="posts__heading">Recent posts</h3>
      {DUMMY_POSTS.map((postItem) => (
        <PostItem key={postItem.id} {...postItem} />
      ))}
    </div>
  );
};

export default Posts;
