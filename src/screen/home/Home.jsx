import { useSelector } from "react-redux";
import NavBar from "../../components/Navbar";
import Register from "./components/Register";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const state = useSelector((state)=>state.user_reducer.user);
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        const getUserData = async()=>{
            const allUsers = await JSON.parse(localStorage.getItem("users"));
            setUsers(allUsers);
        }
        getUserData();
    }, [state])
    return(
        <>  
            <NavBar/>
            <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-0">
                <Register/>
                <div className="flex flex-col items-end">
                    <Table userData={users}/>
                    <div className="mx-12 my-3">
                        <Button 
                            label={"Profiles"} 
                            method={()=>{navigate('/profile', {state: users})}}
                            bg_color={"bg-[#bae6fd]"}
                            border_color={"border-[#22d3ee]"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;