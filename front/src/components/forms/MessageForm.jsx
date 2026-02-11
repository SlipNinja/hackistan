import { useState } from "react";

function MessageForm({ onSubmit }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        onSubmit({ message });
        setMessage("");
    };
    console.log("ok")
    return (
        <form className="form messageForm" onSubmit={handleSubmit}>
            <div className="formGroup">
                <label htmlFor="messageContent" className="formLabel">Réponse</label>
                <textarea
                    id="messageContent"
                    className="formTextarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="formButton">
                Envoyer
            </button>
        </form>
    );
}

export default MessageForm;
