import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Homes/Home.jsx";
import Mobile from "./components/Mobiles/Mobile.jsx";
import Laptop from "./components/Laptops/Laptop.jsx";
import Users from "./components/Users/Users.jsx";
import { Suspense } from "react";
import Users2 from "./components/Users/Users2.jsx";
import UserDetails from "./components/Users/UserDtails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Posts/PostDetails.jsx";

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/mobiles", Component: Mobile },
      { path: "/laptops", Component: Laptop },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users2",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Users2 fetchPromise={fetchPromise} />
          </Suspense>
        ),
      },

      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        Component: UserDetails,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/posts/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        Component: PostDetails,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">not found! 404</h1>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
