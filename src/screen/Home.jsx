import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();
    return (
        <>
            This is home screens
            <button onClick={()=>{navigate('/register')}}>Add user</button>
        </>
    );
};

export default Home;