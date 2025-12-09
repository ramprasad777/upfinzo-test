import './button.css';
const Button = (props)=>{
    return(
        <a href={props.link} className={`btn ${props.style}`}>
            <span>{props.text}</span>
            <span className="arrow">
                <span>
                    {/* <img src="/arrow.png" alt="right arrow" /> */}
                    →
                </span>
            </span>
        </a>
    )
}
export default Button;