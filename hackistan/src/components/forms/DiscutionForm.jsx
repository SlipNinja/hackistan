import { useState } from "react";

function DiscutionForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
        <form className="form discutionForm" onSubmit={handleSubmit}>
            <h2 className="formTitle">Nouvelle discussion</h2>

            <div className="formGroup">
                <label htmlFor="discutionTitle" className="formLabel">Titre</label>
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
                <label htmlFor="discutionContent" className="formLabel">Message</label>
                <textarea
                    id="discutionContent"
                    className="formTextarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="formButton">
                Publier
            </button>
        </form>
    );
}

export default DiscutionForm;
