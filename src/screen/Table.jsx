import Button from "../components/Button";

const Table = ({userData})=>{
    return(
        <table className="flex flex-col my-2 mx-12 justify-center">
            
            <thead >
                <tr className="table_header">
                    <td className="left_cell">Name</td>
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
                                    />
                                    <Button 
                                        label={"Delete"}
                                        bg_color={"bg-[#f87171]"}
                                        border_color={"border-[#b91c1c]"}
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