import { useState } from "react"

export default function Register() {

    const [formData,setformData]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
    })

    const [errors,setErrors]=useState([]);
    const [successMsg,setsuccessMsg]=useState("");

    const handleChange=(e)=>{
        setformData({...formData,[e.target.value]:e.target.value})
    }

    const validate=()=>{
        let newErrors={};
        if(!formData.uname) newErrors.uname='Name is reqired';
        if(!formData.uemail) newErrors.uemail='Email is required';
        if(!formData.upass) newErrors.upass='Password is required';
        if(!formData.ucpass) newErrors.ucpass='Confirm Password is required';
        if(formData.upass!==formData.ucpass) newErrors.ucpass='Password and Confirm Password does not matched!!!';
        return newErrors;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length===0)
        {
            setsuccessMsg('Registration done successfully');
        }
        else{
            setsuccessMsg('Registration failed')
        }
    }
return (
    <>

        <center>
            <h1>register Form</h1>
            <form>
                <label>Enter Name: </label>
                <input type="text" name="uname" />

                <br /><br />

                <label>Emailid: </label>
                <input type="email" name="uemail" />

                <br /><br />

                <label>Password: </label>
                <input type="password" name="upass" />

                <br /><br />

                <label>Confirm Password: </label>
                <input type="password" name="ucpass" />

                <br /><br />

                <input type="submit" value={"submit"} />
                <input type="reset" value={"cancel"} />
            </form>
        </center>
    </>
)
}