import Home from "../home/Home";
import Register from "../register/RegisterPage";
import Unauthorized from "../Unauthorized/Unauthorized";

export const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    path: "*",
    element: <Unauthorized />,
  },
];
