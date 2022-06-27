import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BreadandCakesPage from "./pages/BreadandCakesPage";
import CategoryPage from "./pages/CategoryPage";
import MyCartPage from "./pages/MyCartPage";
import ConfirmPage from "./pages/ConfirmPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route  path="breadandcakes/" element={<BreadandCakesPage />}>
          <Route path=":filtertype" element={<BreadandCakesPage />} />
      </Route>
      <Route path="/mycart" element={<MyCartPage />} />
  <Route path="/mycart/confirm" element={<ConfirmPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
