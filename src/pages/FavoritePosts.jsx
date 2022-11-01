import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export const Favorites = () => {
  const { posts, users } = useContext(PostsContext);

  console.log(posts);
  console.log(users);

  if (posts.length === 0) return <div className='posts'>loading...</div>;

  return <div className='posts'></div>;
};
