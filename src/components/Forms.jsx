
// import { Form } from "react"
import {useState} from "react"
export const Form=()=>{

    const [formData,setFormData]=useState({
        username:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        married:"",
        unmarried:""
    })
 
    function handelchange(e){
        const {id,value}=e.target;
        setFormData({
            ...formData,
            [id]:value,
            
        });
    };
   

    //form submit
    const handelSubmit=(e)=>{
        console.log(formData)
        e.preventDefault()
        fetch("http://localhost:8080/Employees/",{
            method:"POST",
            headers:{"Content-Type":"application/json"}  ,
            body:JSON.stringify(formData)
          })
        
        }



    return (
      
        <form id="form" onSubmit={handelSubmit}>
              <h1>FORM</h1>
            <b>Name:</b><input onChange={handelchange} type="text" placeholder="Enter username" id="username"></input><br></br><br></br>
           <b>Age:</b> <input onChange={handelchange} type="number" placeholder="Enter age" id="age"></input><br></br><br></br>
            <b>Address:</b><input onChange={handelchange} type="text" placeholder="Enter your address" id="address"></input><br></br><br></br>
            <b>Department:</b><select onChange={handelchange} id="department"><br></br><br></br>
                <option>Developer</option>
                <option>Tester</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>HR</option>
            </select><br></br><br></br>
            <b>Salary:</b><input onChange={handelchange} type="number" placeholder="Enter your salary" id="salary"></input><br></br><br></br>
            <b>Martial State:</b><input onChange={handelchange} type="checkbox" id="married"></input>Married<input type="checkbox" onChange={handelchange} id="unmarried"></input>Unmarried<br></br><br></br>
            <input type="submit" id="sub" value="submit"></input><br></br>
        </form>
    )
}