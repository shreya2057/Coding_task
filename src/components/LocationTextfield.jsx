const LocationTextField = ({label, id, placeholder, value, onChangeMethod})=>{
    return (
        <div className="mt-3">
            <label htmlFor={id} className="mr-3 text-sm font-semibold">{label}:</label>
            <input 
                type="text"
                autoComplete="off" 
                id={id} 
                value={value}
                className="border w-32 text-gray-500 rounded-sm text-sm border-gray-300 focus:outline-none focus:border-gray-400 p-1"
                placeholder={placeholder}
                onChange={onChangeMethod}
            />   
        </div>
    );
};

export default LocationTextField;