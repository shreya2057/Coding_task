import { useDispatch, useSelector } from "react-redux";
import { Modal} from "antd";
import NavBar from "../../components/Navbar";
import Register from "./components/Register";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/reducers";
import { readUserData, deleteUserData } from "../../services/crud";

const Home = ()=>{
    const state = useSelector((state)=>state.user_reducer.user);
    const {id, name} = useSelector((state)=>state.user_reducer.currentUserData);
    const dispatch = useDispatch()
    const [users, setUsers] = useState();
    const [modal_visible,setVisible] = useState(false);
    const navigate = useNavigate();
    const sorting = ()=>{
        if(users){
            const sorted_data = users.slice().sort((a, b) => a.name.localeCompare(b.name))
            setUsers(sorted_data);
            console.log(sorted_data);
        }
        console.log(sorting);
    }
    const deleteData = async()=>{
        const updatedData = await deleteUserData(users, id)
        dispatch(deleteUser(updatedData));
        setVisible(false)
    }
    useEffect(()=>{
        const getUserData = async()=>{
            const allData = await readUserData();
            setUsers(allData);
        }
        getUserData();
    }, [state])
    return(
        <>  
            <NavBar/>
            <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-0">
                <Register/>
                <div className="flex flex-col justify-center items-end">
                    <Table 
                        userData={users} 
                        sorting={sorting}
                        deleteMethod={()=>{setVisible(true)}}/>
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
            <Modal 
                title = "Alert"
                open = {modal_visible} centered
                onCancel={()=>setVisible(false)}
                footer = {(_)=>(
                    <div className="flex gap-3 justify-end">
                        <Button 
                            label={"Cancel"}
                            bg_color={"bg-[#86efac]"}
                            border_color={"border-[#10b981]"}
                            method={()=>setVisible(false)}
                        />
                        <Button
                            label={"Delete"}
                            bg_color={"bg-[#f87171]"}
                            border_color={"border-[#b91c1c]"}
                            method={()=>deleteData()}
                        />
                    </div>
                )}
            >
                <p>Are you sure you want to delete {name} ?</p>
            </Modal>
        </>
    );
};

export default Home;