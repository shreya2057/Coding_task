import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from "react-router-dom";
import App from "../App";
import Edit from "../screen/Edit";

const AppRouter = ()=>{
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;