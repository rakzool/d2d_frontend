import "./styles/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainRoute from "./pages/RouterSepersater/MainRoute/MainRoute.component";
import DashbordRoute from "./pages/RouterSepersater/DashboardRoute/DashboardRoute.component";
import FormsRoute from "./pages/RouterSepersater/formsRoute/FormsRoute.component";
import LoginPage from "./pages/LoginPage/loginPage.component";
import RegisterPage from "./pages/RegisterPage/RegisterPage.component";
import HomepPage from "./pages/HomePage/HomePage.component";
import DashbordHome from "./pages/DashbordHome/DashbordHome.component";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<FormsRoute />}>
            <Route path="login" exact element={<LoginPage />} />
            <Route path="register" exact element={<RegisterPage />} />
          </Route>
          <Route element={<MainRoute />}>
            <Route path="home" exact element={<HomepPage />} />
            <Route path="/" element={<HomepPage />} />
          </Route>
          <Route element={<DashbordRoute />}>
            <Route path="dashboard" exact element={<DashbordHome />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
