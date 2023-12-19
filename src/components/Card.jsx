import Button from "./Button";

const Card = ({userData})=>{
    return(
        <div className="border border-gray-300 rounded-sm text-sm m-3">
            <div className="py-1 px-2 font-bold bg-[#bbf7d0]">
                {userData.name}
            </div>
            <div className="flex justify-between items-end border-t border-gray-300 py-1 px-2">
                <div className="flex flex-col md:w-[470px] justify-between">
                    <p>
                        <b>Address: </b>
                        <span className="card_description_value">
                            {userData.address.city}, {userData.address.district} District, {userData.address.province} Province, {userData.address.country}
                        </span>
                    </p>
                    <p>
                        <b>Email: </b>
                        <span className="card_description_value">
                            {userData.email}
                        </span>
                    </p>
                    <p>
                        <b>Phone No: </b>
                        <span className="card_description_value">
                            {userData.phoneNo}
                        </span>
                    </p>
                    <p>
                        <b>DOB: </b>
                        <span className="card_description_value">
                            {userData.dob}
                        </span>
                    </p>
                </div>
                <Button label={"Edit"} border_color={"border-[#a7f3d0]"} bg_color={"bg-[#d1fae5]"}/>
            </div>
        </div>
    );
};

export default Card;