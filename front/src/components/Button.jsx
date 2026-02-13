import "./../styles/component/button.css";

export default function Button({text, onClick, type = "button"}){

    return(
        <>
        <button className="button" type={type}  onClick={onClick}>
            <span>{text}</span>
        </button>
        </>
    )
}