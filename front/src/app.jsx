import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/home"
import Footer from "./components/Footer"
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import DiscutionForm from "./components/forms/DiscutionForm";
import DiscutionPage from "./pages/DiscutionPage";
import "./../src/styles/index.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/discution/:id" element={<DiscutionPage />} />
        <Route
          path="/login"
          element={<LoginForm onSubmit={(d) => console.log("login", d)} />}
        />
        <Route
          path="/register"
          element={<RegisterForm onSubmit={(d) => console.log("register", d)} />}
        />
        <Route
          path="/discutionForm"
          element={<DiscutionForm onSubmit={(d) => console.log("discution", d)} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
