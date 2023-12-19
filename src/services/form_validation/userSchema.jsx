import {date, object, string} from "yup";

const userSchema = object({
    name: string()
            .required("Name is required field"),
    email: string().required("Email is reqiuired field")
            .email("Invalid email"),
    phoneNo: string()
            .matches(/^[0-9]+$/, 'Phone number must contain digits only')
            .required("Phone number is required field")
            .min(7, "Phone number should contain atleast 7 digits"),
    dob: date().max(new Date(), 'DOB must be less than or equal to today'),
    address: object({
        city: string()
            .matches(/^[a-zA-Z]*$/, 'City must contain alphabets only'),
        district: string()
            .matches(/^[a-zA-Z]*$/, 'District must contain alphabets only'),
        country: string()
            .matches(/^[a-zA-Z]*$/, 'Country must contain alphabets only'),
    })
})

export default userSchema;