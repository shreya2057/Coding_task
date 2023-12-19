const DropDown = ({label, id, placeholder, value, onChangeMethod}) => {
    return (
        <div className="mt-3">
            <label htmlFor={id} className="mr-3 text-sm font-semibold">{label}:</label>
            <select 
                onChange={onChangeMethod}
                name={id}
                id={id}
                value={value}
                className="border w-32 text-gray-500 rounded-sm text-sm border-gray-300 focus:outline-none focus:border-gray-400 p-1"
            >
                <option value="">{placeholder}</option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpashchim">Sudurpashchim</option>
            </select>   
        </div>
    );
};

export default DropDown;