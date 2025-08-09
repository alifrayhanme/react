import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <RouterProvider router={Router} />
      </ProductContextProvider>
    </>
  );
}

export default App;
