import React from "react";
import "./index.css";
import Chat from "./pages/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Image from "./pages/Image";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/image",
        element: <Image />,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
