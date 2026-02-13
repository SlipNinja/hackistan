import { useState } from "react";
import "./../../styles/component/discutionForm.css";
import { useAuth } from "../../hook/useAuth";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function DiscutionForm({ onSubmit }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		
		e.preventDefault();
		const response = await onSubmit({ title, content });
		navigate("/");
	};

	return (
		<form className="form discutionForm" onSubmit={handleSubmit}>
			<h2 className="formTitle">Nouvelle discussion</h2>

			<div className="formGroup">
				<label htmlFor="discutionTitle" className="formLabel">
					Titre
				</label>
				<input
					id="discutionTitle"
					type="text"
					className="formInput"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</div>

			<div className="formGroup">
				<label htmlFor="discutionContent" className="formLabel">
					Message
				</label>
				<textarea
					id="discutionContent"
					className="formTextarea"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
				/>
			</div>

			<Button type="submit" className="formButton">
				Publier
			</Button>
		</form>
	);
}

export default DiscutionForm;
