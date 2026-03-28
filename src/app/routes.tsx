import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Government from "./pages/Government";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "government", Component: Government },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
