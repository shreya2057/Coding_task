import { useLocation, useNavigate } from "react-router-dom";
import CoverImage from "../app-images/register.jpg";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import LocationTextField from "../components/LocationTextfield";
import NavBar from "../components/Navbar";
import Textfield from "../components/Textfield";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers";
import { updateUserData } from "../services/crud";

const Edit = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = location.state;
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phoneNo, setPhoneNo] = useState(user.phoneNo);
    const [dob, setDOB] = useState(user.dob);
    const [city, setCity] = useState(user.address.city);
    const [district, setDistrict] = useState(user.address.district);
    const [province, setProvince] = useState(user.address.province);
    const [country, setCountry] = useState(user.address.country)
   
    const submit = (event)=>{
        event.preventDefault();
        const userData = {
            id: user.id,
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
        const users = updateUserData(userData, user.id)
        dispatch(updateUser(userData));
        navigate('/');
    }
    return (
        <div className="flex flex-col h-screen">
        <NavBar/>
        <div className="flex flex-row h-full">
            <img src={CoverImage} className="lg:flex hidden"/>
            <div className="flex flex-1 flex-col items-center mt-2">
                <form className="md:py-3 md:px-10 rounded-md border-2 border-gray-100 shadow-md">
                    <Textfield
                        label={"Name"}
                        type={"text"}
                        placeholder={"Enter your full name"}
                        id={"name"}
                        required={true}
                        onChangeMethod={(event)=>{setName(event.target.value)}}
                        value={name}
                    />
                    <Textfield
                        label={"Email"}
                        type={"email"}
                        placeholder={"Enter your email"}
                        id={"email"}
                        required={true}
                        onChangeMethod={(event)=>{setEmail(event.target.value)}}
                        value={email}
                    />
                    <Textfield
                        label={"Phone Number"}
                        type={"tel"}
                        placeholder={"Enter your phone number"}
                        id={"phoneNo"}
                        required={true}
                        value={phoneNo}
                        onChangeMethod={(event)=>{setPhoneNo(event.target.value)}}
                    />
                    <Textfield
                        label={"DOB (AD)"}
                        type={"date"}
                        id={"dob"}
                        required={false}
                        value={dob}
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
                                value={city}
                                onChangeMethod={(event)=>setCity(event.target.value)}
                            />
                            <LocationTextField 
                                label={"District"} 
                                id={"district"} 
                                value={district}
                                placeholder={"District Name"}
                                onChangeMethod={(event)=>setDistrict(event.target.value)}
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <DropDown 
                                label={"State"} 
                                id={"state"} 
                                placeholder={"--State"}
                                value={province}
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
                            label={"Update"} 
                            method={(event)=>submit(event)}
                            bg_color={"bg-[#86efac]"}
                            border_color={"border-[#10b981]"}
                        />
                    </div>
                </form>
           </div>
        </div>
        </div>
    );
};

export default Edit;