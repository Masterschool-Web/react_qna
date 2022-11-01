import { createContext, useEffect, useState } from "react";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [usersMap, setUsersMap] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        const posts = await response.json();

        const usersMap = {};
        posts.forEach((post) => {
          usersMap[post.userId] = true;
        });

        setUsersMap(usersMap);
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const fullUsers = {};

      await Promise.all(
        Object.keys(usersMap).map(async (userId) => {
          const response = await fetch(`${API_BASE_URL}/users/${userId}`);
          const user = await response.json();
          users[user.id] = user;
        })
      );
      setUsers(fullUsers);
    };

    if (Object.keys(usersMap).length === 0) {
      return;
    }
    fetchUsers();
  }, [usersMap]);

  const value = { posts, users };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
