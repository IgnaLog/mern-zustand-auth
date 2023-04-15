import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import LoginPage from "./views/pages/LoginPage";
import RegisterPage from "./views/pages/RegisterPage";
import ProfilePage from "./views/pages/ProfilePage";
import HomePage from "./views/pages/HomePage";
import Navigation from "./views/components/Navigation";
import ProtectedRoute from "./views/components/ProtectedRoute";

const App = () => {
  const { isAuth } = useAuthStore();

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
