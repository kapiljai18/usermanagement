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

    return(
        <>
            <div>
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
            </div>
        </>
    )
}

export default AllUsers;