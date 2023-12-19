import { useSelector } from "react-redux";
import NavBar from "../../components/Navbar";
import Register from "./components/Register";
import Table from "./components/Table";
import { useEffect, useState } from "react";

const Home = ()=>{
    const state = useSelector((state)=>state.user_reducer.user);
    const [users, setUsers] = useState();
    if(users){
        console.log(users);
    }
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
            <div className="flex justify-between">
                <Register/>
                <Table userData={users}/>
            </div>
        </>
    );
};

export default Home;