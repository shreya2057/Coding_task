import NavBar from "../components/Navbar";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Profile = ()=>{
    const location = useLocation();
    const users = location.state;
    return(
        <>
            <NavBar/>
            <div className="flex flex-col items-center p-3">
                <span className="text-3xl font-extrabold">Profiles</span>
                {
                    users
                    &&
                    users.map((item, key)=><Card key={key} userData={item}/>)
                }
            </div>
        </>
    );
};

export default Profile;