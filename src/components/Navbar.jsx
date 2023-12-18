import { Link } from "react-router-dom";

const NavBar = ()=>{
    return <div className="flex flex-row justify-between px-8 py-2 text-lg font-bold bg-slate-700 text-white">
        <Link to='/'>Register User</Link>
    </div>
}

export default NavBar;