import { useState } from "react";
import "./../../styles/component/loginForm.css"
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function LoginForm({ onSubmit }) {
    let navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await onSubmit({ email, password });
        if (success) {
            navigate("/");
        } else {
            setError("Email ou mot de passe incorrect");
        }
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
            {error && <div className="errorMessage">{error}</div>}
            
            <div className="loginButton">
            <Button text="Se connecter" onClick={handleSubmit}/>
            </div>
            <div className="registerLink">
                <span>Pas encore de compte ?</span>
                <a href="/register">Inscrivez-vous</a>
            </div>
        </form>
        </div>
    );
}

export default LoginForm;
