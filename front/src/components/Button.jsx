import "./../styles/component/button.css";

export default function Button({text, onClick }){

    return(
        <>
        <div className="button"  onClick={onClick}>
            <span>{text}</span>
        </div>
        </>
    )
}