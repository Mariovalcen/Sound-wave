import { useRoutes } from "react-router-dom";

import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";
import Join from "./Components/Join/Join";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

export default function Routes() {
  let element = useRoutes([
    {
      element: <Discover />,
      path: "Discover"
    },
    {
      element: <Footer />,
      path: "Footer"
    },
    {
        element: <Join />,
        path: "Join"
    },
    {
        element: <Navbar />,
        path: "Navbar"
    },
    {
      element: <Main />,
      path: "/"
    }
  ]);

  return element;
}
