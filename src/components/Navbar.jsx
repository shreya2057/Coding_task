import { Link } from "react-router-dom";

const NavBar = ()=>{
    return <div className="flex flex-row justify-between px-8 py-2 text-lg font-bold bg-[#134e4a] text-white">
        <Link to='/'>Home</Link>
    </div>
}

export default NavBar;