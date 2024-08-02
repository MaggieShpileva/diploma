import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Cart } from "./pages/Cart";
import { Main } from "./pages/Main";
import { NotFount } from "./pages/NotFount";
import { Product } from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
