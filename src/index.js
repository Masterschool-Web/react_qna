import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { PostPage } from "./pages/Post";
import { TodoPage } from "./pages/Todo";
import { PostsProvider } from "./context/PostsContext";
import { Favorites } from "./pages/FavoritePosts";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <PostPage />,
  },
  {
    path: "/todos",
    element: <TodoPage />,
  },
  {
    path: "/users",
    element: <div>users</div>,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </React.StrictMode>
);
