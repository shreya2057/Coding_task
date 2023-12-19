import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import LocationTextField from "../../../components/LocationTextfield";
import Textfield from "../../../components/Textfield";
import { useState } from "react";
import { createUser, user_reducer } from "../../../redux/reducers";

const Register = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [dob, setDOB] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("Nepal");
    const state = useSelector((state)=>state.user_reducer.user);
    const dispatch = useDispatch();
    const submit = (event)=>{
        event.preventDefault();
        const users = []
        const userData = {
            id: Math.round(Math.random() * 100),
            name: name,
            email: email, 
            phoneNo: phoneNo,
            dob: dob,
            address: {
                city: city,
                district: district,
                province: province,
                country: country
            }
        };
        const currentData = JSON.parse(localStorage.getItem("users"));
        if(currentData !== null){
            if(currentData.constructor === Array){
                currentData.forEach((item)=>users.push(item));
                users.push(userData);
            } else{
                users.push(currentData);
                users.push(userData);
            }
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            users.push(userData);
            localStorage.setItem("users", JSON.stringify(users));
        }
        dispatch(createUser(userData));
    }
    return (
        <div className="flex flex-1 flex-col items-center mt-2">
            <form className="py-3 px-10 rounded-md border-2 border-gray-100 shadow-md">
                <Textfield
                    label={"Name"}
                    type={"text"}
                    placeholder={"Enter your full name"}
                    id={"name"}
                    required={true}
                    onChangeMethod={(event)=>{setName(event.target.value)}}
                />
                <Textfield
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter your email"}
                    id={"email"}
                    required={true}
                    onChangeMethod={(event)=>{setEmail(event.target.value)}}
                />
                <Textfield
                    label={"Phone Number"}
                    type={"tel"}
                    placeholder={"Enter your phone number"}
                    id={"phoneNo"}
                    required={true}
                    onChangeMethod={(event)=>{setPhoneNo(event.target.value)}}
                />
                <Textfield
                    label={"DOB (AD)"}
                    type={"date"}
                    id={"dob"}
                    required={false}
                    onChangeMethod={(event)=>{setDOB(event.target.value)}}
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
                            onChangeMethod={(event)=>setCity(event.target.value)}
                        />
                        <LocationTextField 
                            label={"District"} 
                            id={"district"} 
                            placeholder={"District Name"}
                            onChangeMethod={(event)=>setDistrict(event.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <DropDown 
                            label={"State"} 
                            id={"state"} 
                            placeholder={"--State"}
                            onChangeMethod={(event)=>setProvince(event.target.value)}
                        />
                        <LocationTextField 
                            label={"Country"} 
                            id={"country"} 
                            placeholder={"Country Name"} 
                            value={country}
                            onChangeMethod={(event)=> setCountry(event.target.value)}
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