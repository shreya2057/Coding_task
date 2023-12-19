const Button = ({label, method, bg_color, border_color}) =>{
    return (
        <button 
            onClick={method}
            className ={`py-1 px-5 border ${bg_color} ${border_color} text-sm rounded-md m-0`}
        >
            {label}
        </button>
    );
};

export default Button