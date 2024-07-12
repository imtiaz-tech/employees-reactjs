import React,{useState} from "react";
import axios from 'axios'

function Create(){
    const [firstname, setfirstname]=useState()
    const [lastname,setlastname]=useState()
    const[email,setemail]=useState()
    const handleAdd=()=>{
        
        axios.post('http://localhost:3001/add',{firstname:firstname,lastname:lastname,email:email})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    return(
        <div className="home">
            <h4>firstname</h4>
            <input type="text" firstname="" id="" placeholder="Enter firstname" onChange={(e) => setfirstname(e.target.value)}
            />
            <br/>
            <h4>lastname</h4>
            <input type="text" lastname="" id="" placeholder="Enter lastname" onChange={(e) => setlastname(e.target.value)}
            />
            <br/>
            <h4>email</h4>
            <input type="text" email="" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}
            />
            <br/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}
export default Create