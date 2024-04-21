import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/HomePage";
import Checkout, { action } from "./pages/CheckoutPage";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./Store/store";
import Success from "./pages/Success";
import CartPage from "./pages/CartPage";
import ProductsList from "./features/products/ProductsList";
import ProductsPage from "./pages/ProductsPage";
import Item, { loader as itemLoader } from "./features/products/Item";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Navigate to="/home" />,
        path: "/",
      },
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <ProductsPage />,
        errorElement: <Error />,
        children: [
          {
            element: <ProductsList />,
            path: "/products",
          },
          {
            element: <Item />,
            path: "/products/:id",
            loader: itemLoader,
          },
        ],
      },
      {
        element: <CartPage />,
        path: "/cart",
      },
      {
        element: <Checkout />,
        path: "/cart/checkout",
        errorElement: <Error />,
        action: action,
      },
      {
        element: <Success />,
        path: "/cart/checkout/success",
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{ marginTop: "1rem" }}
        toastOptions={{
          success: {
            duration: 800,
            style: {
              height: "4rem",
              fontSize: "0.8rem",
              width: "60%",
            },
          },
          error: {
            duration: 1200,
            style: {
              height: "4rem",
              fontSize: "0.8rem",
              width: "60%",
            },
          },
        }}
      />
    </Provider>
  );
}

export default App;
