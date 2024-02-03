import "./App.css";
import { AuthProvider } from "./contexts/auth.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import HomePage from "./pages/Homepage/Homepage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/ProductDetailPage/ProductDetailPage";

function App({ products }) {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path='/productId' element={<DetailPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


