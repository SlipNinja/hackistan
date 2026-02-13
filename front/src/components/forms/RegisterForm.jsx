import { useState } from "react";
import './../../styles/component/registerForm.css'
import {useNavigate} from "react-router-dom"

function RegisterForm({ onSubmit }) {
    let navigate=useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, email, password });
        navigate("/login");
    };

    return (
        <form className="form registerForm" onSubmit={handleSubmit}>
            <h2 className="formTitle">Créer un compte</h2>

            <div className="formGroup">
                <label htmlFor="registerUsername" className="formLabel">Pseudo</label>
                <input
                    id="registerUsername"
                    type="text"
                    className="formInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div className="formGroup">
                <label htmlFor="registerEmail" className="formLabel">Email</label>
                <input
                    id="registerEmail"
                    type="email"
                    className="formInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="formGroup">
                <label htmlFor="registerPassword" className="formLabel">Mot de passe</label>
                <input
                    id="registerPassword"
                    type="password"
                    className="formInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="formButton" >
                S’inscrire
            </button>
        </form>
    );
}

export default RegisterForm;
