const Button = ({label, method}) =>{
    return (
        <div className="flex w-full justify-center mt-4 mb-1">
            <button 
                onClick={method}
                className="py-1 px-5 border border-[#10b981] bg-[#86efac] rounded-md"
            >
                {label}
            </button>
        </div>
    );
};

export default Button