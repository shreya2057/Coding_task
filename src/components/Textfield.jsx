const Textfield = ({label, type, placeholder, pattern, id, required, onChangeMethod})=>{
    return (
        <div className="flex flex-col p-2">
            <label 
                htmlFor={id}
                className="text-lg font-medium"
            >
                {label}
                { 
                    required 
                    && 
                    <span className="text-red-500 text-lg px-1 font-bold">*</span>
                }
            </label>
            <input 
                type={type}
                autoComplete="off" 
                id={id} 
                className="border-b text-gray-500 border-gray-300 w-96 focus:outline-none focus:border-gray-400 p-2 my-1"
                placeholder={placeholder}
                onChange={onChangeMethod}
            />
        </div>
    );
};

export default Textfield;