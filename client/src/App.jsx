import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/Accountpage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account:subpage" element={<AccountPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
};

export default App;
