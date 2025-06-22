import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import FicheLogement from "../pages/FicheLogement";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout commun (header/footer)
    children: [
      {
        index: true, // = path: "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:id",
        element: <FicheLogement />,
      },
      {
        path: "*", // Catch-all 404
        element: <NotFound />,
      },
    ],
  },
]);
