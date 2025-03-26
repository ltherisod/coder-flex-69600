const Button = ({text, handler, style, disabled}) => {
    return(
        <button style={{marginTop:5}}onClick={handler} className={style} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button