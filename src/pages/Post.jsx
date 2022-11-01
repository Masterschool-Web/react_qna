import "./post.css";
import { useContext } from "react";
import { Post } from "../components/post/Post";
import { PostsContext } from "../context/PostsContext";

// SEPARATION OF CONCERNS

export const PostPage = () => {
  const { posts, users } = useContext(PostsContext);

  if (posts.length === 0) return <div className='posts'>loading...</div>;

  return (
    <div className='posts'>
      <img src='https://cataas.com/cat' />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            users={users}
          />
        );
      })}
    </div>
  );
};
