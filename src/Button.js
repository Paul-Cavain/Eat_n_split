const Button = ({children, onClick}) => {
    return(
        <div>
            <button className="bg-orange-500 hover:bg-black hover:text-white w-fit px-4 py-2 rounded-md" onClick = {onClick}>{children}</button>
        </div>
    )
}
export default Button;