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
    const [userData, setUserData] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNo: user.phoneNo,
        dob: user.dob,
        address: {
            city: user.address.city,
            district: user.address.district,
            province: user.address.province,
            country: user.address.country
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
                            onChangeMethod={(event)=>{setFormData("name",event.target.value)}}
                            value={userData.name}
                        />
                        <Textfield
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter your email"}
                            id={"email"}
                            required={true}
                            onChangeMethod={(event)=>{setFormData("email",event.target.value)}}
                            value={userData.email}
                        />
                        <Textfield
                            label={"Phone Number"}
                            type={"tel"}
                            placeholder={"Enter your phone number"}
                            id={"phoneNo"}
                            required={true}
                            value={userData.phoneNo}
                            onChangeMethod={(event)=>{setFormData("phoneNo", event.target.value)}}
                        />
                        <Textfield
                            label={"DOB (AD)"}
                            type={"date"}
                            id={"dob"}
                            required={false}
                            value={userData.dob}
                            onChangeMethod={(event)=>{setFormData("dob",event.target.value)}}
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
                                    value={userData.address.city}
                                    onChangeMethod={(event)=>setAddressFormData("city",event.target.value)}
                                />
                                <LocationTextField 
                                    label={"District"} 
                                    id={"district"} 
                                    value={userData.address.district}
                                    placeholder={"District Name"}
                                    onChangeMethod={(event)=>setAddressFormData("district",event.target.value)}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <DropDown 
                                    label={"State"} 
                                    id={"state"} 
                                    placeholder={"--State"}
                                    value={userData.address.province}
                                    onChangeMethod={(event)=>setAddressFormData("province",event.target.value)}
                                />
                                <LocationTextField 
                                    label={"Country"} 
                                    id={"country"} 
                                    placeholder={"Country Name"} 
                                    value={userData.address.country}
                                    onChangeMethod={(event)=> setAddressFormData("country",event.target.value)}
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