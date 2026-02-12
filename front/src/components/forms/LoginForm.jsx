import { useState } from "react";
import "./../../styles/component/loginForm.css"
import Button from "../Button";

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <div className="loginContent">
        <form className="form loginForm" onSubmit={handleSubmit}>
            <h2 className="formTitle">Connexion</h2>

            <div className="formGroup">
                <label htmlFor="loginEmail" className="formLabel">Email</label>
                <input
                    id="loginEmail"
                    type="email"
                    className="formInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="formGroup">
                <label htmlFor="loginPassword" className="formLabel">Mot de passe</label>
                <input
                    id="loginPassword"
                    type="password"
                    className="formInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="loginButton">
            <Button text="Se connecter" onClick={handleSubmit}/>
            </div>
        </form>
        </div>
    );
}

export default LoginForm;
