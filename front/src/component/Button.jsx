import "./../styles/component/button.css";

export default function Button({text}){

    return(
        <>
        <div className="button">
            <span>{text}</span>
        </div>
        </>
    )
}