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
                <label htmlFor="messageContent" className="formLabel">Écrivez votre commentaire</label>
                <textarea
                    id="messageContent"
                    className="formTextarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <div className="postButton">
<<<<<<< HEAD
            <Button text="Envoyer" />
=======
            <Button text="Envoyer" type="submit"/>
>>>>>>> 742f3bcddf7d44f55e708487e08b60caf831d2c3
            </div>
        </form>
    );
}

export default MessageForm;
