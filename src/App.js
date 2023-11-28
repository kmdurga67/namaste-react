import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./components/HeaderComponent.js";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";
const Grocery = lazy(() => import("./components/Grocery")); //on demand loading
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

// const heading = React.createElement("h1", {}, "Hello World from react!");

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(async () => {
    const data = await fetch("https://api.github.com/users/kmdurga67");
    const json = await data.json();

    setUserName(json.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: userName }}>
        <div className="app">
          <HeaderComponent />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      { path: "/resturants/:resId", element: <ResturantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
