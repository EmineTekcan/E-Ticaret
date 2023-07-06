import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ProductDetail />} path="/products/:id" />
          </Routes>

        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
