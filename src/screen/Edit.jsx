import CoverImage from "../app-images/register.jpg";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import LocationTextField from "../components/LocationTextfield";
import NavBar from "../components/Navbar";
import Textfield from "../components/Textfield";
import { useState } from "react";

const Edit = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [dob, setDOB] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("Nepal")
    const submit = (event)=>{
        event.preventDefault();
        console.log(name, email, phoneNo, dob, city, district, province, country);
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
                    <Button 
                        label={"Update"} 
                        method={(event)=>submit(event)}
                    />
                </form>
           </div>
        </div>
        </div>
    );
};

export default Edit;