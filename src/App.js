import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Main from "./components/Layout/Main";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import { productsAndCartLoader } from "./Loader/ProductsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("products.json");
          },
          element: <Shop />,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        { path: "/inventory", element: <Inventory /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
