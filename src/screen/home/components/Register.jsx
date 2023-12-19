import { useDispatch } from "react-redux";
import { useState } from "react";
import { message } from "antd";
import { createUser} from "../../../redux/reducers";
import { createUserData } from "../../../services/crud";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import LocationTextField from "../../../components/LocationTextfield";
import Textfield from "../../../components/Textfield";
import userSchema from "../../../services/form_validation/userSchema";

const Register = ()=>{
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const openMessage = (type, content) => {
        messageApi.open({
            key: 'updatable',
            type: type,
            content: content,
            duration: 1.5
        });
    };

    const [userData, setUserData] = useState({
        id: Math.round(Math.random() * 100),
        name: "",
        email: "",
        phoneNo: "",
        dob: "",
        address: {
            city: "",
            district: "",
            province: "",
            country: "Nepal"
        }
    });

    const setFormData = (field_name, value)=>{
        setUserData({ ...userData,[field_name]: value});
    }

    const setAddressFormData = (field_name, value)=>{
        setUserData({
            ...userData, 
            address: {
                ...userData.address,
                [field_name]: value
            }
        });
    }
    
    const submit = (event)=>{
        event.preventDefault();
        userSchema.validate(userData)
        .then(
            response=>{
                console.log(response);
                createUserData(userData);
                dispatch(createUser(userData));
            })
        .catch(error=>openMessage("error", error.message));
        
    }
    return (
        <div className="flex flex-1 flex-col items-center mt-2">
            {contextHolder}
            <form className="py-3 px-10 rounded-md border-2 border-gray-100 shadow-md">
                <Textfield
                    label={"Name"}
                    type={"text"}
                    placeholder={"Enter your full name"}
                    id={"name"}
                    required={true}
                    onChangeMethod={(event)=>setFormData("name", event.target.value)}
                />
                <Textfield
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter your email"}
                    id={"email"}
                    required={true}
                    onChangeMethod={(event)=>{setFormData("email", event.target.value)}}
                />
                <Textfield
                    label={"Phone Number"}
                    type={"tel"}
                    placeholder={"Enter your phone number"}
                    id={"phoneNo"}
                    required={true}
                    onChangeMethod={(event)=>{setFormData("phoneNo", event.target.value)}}
                />
                <Textfield
                    label={"DOB (AD)"}
                    type={"date"}
                    id={"dob"}
                    required={false}
                    onChangeMethod={(event)=>{setFormData("dob", event.target.value)}}
                />
                <div className="m-2">
                    <label className="text-lg font-medium">
                        Address
                    </label>
                    <div className="flex flex-row justify-between">
                        <LocationTextField 
                            label={"City"} 
                            id={"city"} 
                            placeholder={"City Name"}
                            onChangeMethod={(event)=>setAddressFormData("city",event.target.value)}
                        />
                        <LocationTextField 
                            label={"District"} 
                            id={"district"} 
                            placeholder={"District Name"}
                            onChangeMethod={(event)=>setAddressFormData("district", event.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <DropDown 
                            label={"State"} 
                            id={"state"} 
                            placeholder={"--State"}
                            onChangeMethod={(event)=>setAddressFormData("province",event.target.value)}
                        />
                        <LocationTextField 
                            label={"Country"} 
                            id={"country"} 
                            placeholder={"Country Name"} 
                            value={userData.address.country}
                            onChangeMethod={(event)=> setAddressFormData("country", event.target.value)}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center my-2">
                    <Button 
                        label={"Register"} 
                        method={(event)=>submit(event)}
                        bg_color={"bg-[#86efac]"}
                        border_color={"border-[#10b981]"}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;