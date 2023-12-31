import { useDispatch } from "react-redux";
import { SortAscendingOutlined } from "@ant-design/icons"
import Button from "../../../components/Button";
import { currentUser } from "../../../redux/reducers";
import { useNavigate } from "react-router-dom";

const Table = ({userData, sorting, deleteMethod})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <table className="flex flex-col my-2 mx-12 justify-center">
            <thead >
                <tr className="table_header">
                    <td className="left_cell">
                        <div className="flex justify-between">
                            <span>Name</span>
                            <button 
                                className="text-lg"
                                onClick={sorting}
                            >
                                <SortAscendingOutlined className="self-center"/>
                            </button>
                        </div>
                    </td>
                    <td className="right_cell">Action buttons</td>
                </tr>
            </thead>
            <tbody>
                {   
                    userData
                    &&
                    userData.map((item, key)=>
                        <tr className="table_body" key={key}>
                            <td className="left_cell">{item.name}</td>
                            <td className="right_cell">
                                <div className="flex flex-row justify-end gap-3">
                                    <Button 
                                        label={"Edit"}
                                        bg_color={"bg-[#86efac]"}
                                        border_color={"border-[#10b981]"}
                                        method={()=>{
                                            navigate('/edit', {state:item})
                                        }}
                                    />
                                    <Button 
                                        label={"Delete"}
                                        bg_color={"bg-[#f87171]"}
                                        border_color={"border-[#b91c1c]"}
                                        method={()=>{
                                            console.log(item.id)
                                            dispatch(currentUser({id:item.id, name:item.name}));
                                            deleteMethod();
                                        }}
                                    />
                                </div>
                            </td>
                        </tr>
                    ) 
                }
            </tbody>
        </table>
    );
};

export default Table;