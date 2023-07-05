import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>

        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
