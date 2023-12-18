import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from "react-router-dom";
import App from "../App";
import Register from "../screen/Register";

const AppRouter = ()=>{
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="register" element={<Register/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;