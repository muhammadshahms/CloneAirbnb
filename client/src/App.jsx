import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
