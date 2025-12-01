import users from "./User";
import SingleUser from "./SingleUser";
import { useState } from "react";

const AllUsers=()=>
{
    const [emp,setEmp]=useState([]);
    const [showemp,setShowemp]=useState(false);

    const addEmp=()=>{
        setEmp(users);
        setShowemp(true);
    }

    const deleteAllUser=()=>{
        setEmp([]);
        setShowemp(false);
    }

    const deleteUser=(id)=>{
        const updatedEmp=emp.filter(e=>e.id!==id);
        setEmp(updatedEmp);
        if(updatedEmp.length===0)
        {
            setShowemp(false);
        }
    }

    return(
        <>
            <div>
                <h1>Employee Data</h1>
                {!showemp && (
                    <button onClick={addEmp}>Add Emp</button>
                )}

                {showemp &&(
                <table border={1} cellPadding={10} cellSpacing={10}>
                    <tbody>
                        {emp.map(e=>(
                            <SingleUser key={e.id} user={e} deleteUser={deleteUser}/>
                        ))}
                    </tbody>
                </table>
                )}

                {showemp &&(
                    <button onClick={deleteAllUser}>Delete All users</button>
                )}
            </div>
        </>
    )
}

export default AllUsers;