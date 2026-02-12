import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/home"
import Footer from "./components/Footer"
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import DiscutionForm from "./components/forms/DiscutionForm";
import DiscutionPage from "./pages/DiscutionPage";
import "./../src/styles/index.css"
import api from "./api/axios"
import Cookies from "js-cookie"

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discution/:id" element={<DiscutionPage />} />
        <Route
          path="/login"
          element={<LoginForm onSubmit={async (d) => {
                const {email, password}=d
                const body={
                  email:email,
                  password:password
                }
                const response=await api.post("/auth/login", body)
                console.log(response.data)
                  Cookies.set("token", response.data.token, { expires: 1 });    
          }}
          />}
        />
        <Route
          path="/register"
          element={<RegisterForm onSubmit={(d) => console.log("register", d)} />}
        />
        <Route
          path="/discutionForm"
          element={<PrivateRoute><DiscutionForm onSubmit={(d) => console.log("discution", d)} /></PrivateRoute>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
    </AuthProvider>

  );
}
export default App;
