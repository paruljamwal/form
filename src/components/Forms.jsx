// import { axios } from "axios"
import { useEffect, useState } from "react";
import customers from "./form.css";
import { DataBase } from "./Tabel";

export const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        maritalstate: false,
    });

    const [database, setDatabase] = useState([]);
    //get data from axios and put inside table..
    const getData = () => {
        fetch("http://localhost:8080/Employees/")
            .then((response) => response.json())
            .then((formData) => setDatabase(formData));
    };

    //call data only once
    useEffect(() => {
        getData();
    }, []);

    function handelchange(e) {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    //form submit
    const handelSubmit = (e) => {
        // console.log(formData)
        e.preventDefault();
        fetch("http://localhost:8080/Employees/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(() => {
                alert("user created");
            })
            .then(() => {
                getData();
            });
    };

    //var database=formData;
    //localStorage.setItem("bag",JSON.stringify(database))
    // console.log("form", formData)
    return (
        <div>
            <form id="form" onSubmit={handelSubmit}>
                <h1>FORM</h1>
                <b>Name:</b>
                <input
                    onChange={handelchange}
                    type="text"
                    placeholder="Enter username"
                    id="username"
                ></input>
                <br></br>
                <br></br>
                <b>Age:</b>{" "}
                <input
                    onChange={handelchange}
                    type="number"
                    placeholder="Enter age"
                    id="age"
                ></input>
                <br></br>
                <br></br>
                <b>Address:</b>
                <input
                    onChange={handelchange}
                    type="text"
                    placeholder="Enter your address"
                    id="address"
                ></input>
                <br></br>
                <br></br>
                <b>Department:</b>
                <select onChange={handelchange} id="department">
                    <br></br>
                    <br></br>
                    <option>Developer</option>
                    <option>Tester</option>
                    <option>Designer</option>
                    <option>Manager</option>
                    <option>HR</option>
                </select>
                <br></br>
                <br></br>
                <b>Salary:</b>
                <input
                    onChange={handelchange}
                    type="number"
                    placeholder="Enter your salary"
                    id="salary"
                ></input>
                <br></br>
                <br></br>
                <b>Martial State:</b>
                <input
                    onChange={handelchange}
                    type="checkbox"
                    id="maritalstate"
                ></input>
                <br></br>
                <br></br>
                <input type="submit" id="sub" value="submit"></input>
                <br></br>
            </form>
            <div id="container">
                <table id="customers">
                    <thead>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>MartialState</th>
                    </thead>

                    {database.map((e) => {
                        return <DataBase data={e} key={e.id}></DataBase>;
                    })}
                </table>
            </div>
        </div>
    );
};
