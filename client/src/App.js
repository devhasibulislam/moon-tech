import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </ProductProvider>
  );
}

export default App;
