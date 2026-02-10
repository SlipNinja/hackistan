import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import DiscussionForm from "./components/forms/DiscussionForm";
import MessageForm from "./components/forms/MessageForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Connexion</Link> |{" "}
        <Link to="/register">Créer un compte</Link> |{" "}
        <Link to="/discussion">Nouvelle discussion</Link>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={<LoginForm onSubmit={(d) => console.log("login", d)} />}
        />
        <Route
          path="/register"
          element={<RegisterForm onSubmit={(d) => console.log("register", d)} />}
        />
        <Route
          path="/discussion"
          element={<DiscussionForm onSubmit={(d) => console.log("discussion", d)} />}
        />
        <Route
          path="/message"
          element={<MessageForm onSubmit={(d) => console.log("message", d)} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
