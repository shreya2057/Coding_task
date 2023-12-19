import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from "react-router-dom";
import App from "../App";
import Edit from "../screen/Edit";
import Profile from "../screen/Profile";

const AppRouter = ()=>{
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="edit" element={<Edit/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;