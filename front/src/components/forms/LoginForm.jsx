import { useState } from "react";
import "./../../styles/component/loginForm.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

function LoginForm({ onSubmit }) {
	const { login } = useAuth();
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(email, password);
			onSubmit(email, password);
			navigate("/");
		} catch (err) {
			console.log(err);
			if (err.response?.data?.message) {
				setError(err.response.data.message);
			} else {
				setError("Erreur serveur");
			}
		}
	};

	return (
		<div className="loginContent">
			<form className="form loginForm">
				<h2 className="formTitle">Connexion</h2>

				<div className="formGroup">
					<label htmlFor="loginEmail" className="formLabel">
						Email
					</label>
					<input
						id="loginEmail"
						type="email"
						className="formInput"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setError("");
						}}
						required
					/>
				</div>

				<div className="formGroup">
					<label htmlFor="loginPassword" className="formLabel">
						Mot de passe
					</label>
					<input
						id="loginPassword"
						type="password"
						className="formInput"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							setError("");
						}}
						required
					/>
				</div>
				{error && <div className="errorMessage">{error}</div>}

				<div className="loginButton">
					<Button text="Se connecter" onClick={handleSubmit} />
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
