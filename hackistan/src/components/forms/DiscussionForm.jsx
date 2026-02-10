import { useState } from "react";

function DiscussionForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
        <form className="form discussionForm" onSubmit={handleSubmit}>
            <h2 className="formTitle">Nouvelle discussion</h2>

            <div className="formGroup">
                <label htmlFor="discussionTitle" className="formLabel">Titre</label>
                <input
                    id="discussionTitle"
                    type="text"
                    className="formInput"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="formGroup">
                <label htmlFor="discussionContent" className="formLabel">Message</label>
                <textarea
                    id="discussionContent"
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

export default DiscussionForm;
