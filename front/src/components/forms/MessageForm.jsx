import { useState } from "react";
import "./../../styles/component/messageForm.css"
import Button from "../Button";

function MessageForm({ onSubmit }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        onSubmit({ message });
        setMessage("");
    };
    
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
            <div className="postButton">
            <Button text="Envoyer"/>
            </div>
        </form>
    );
}

export default MessageForm;
