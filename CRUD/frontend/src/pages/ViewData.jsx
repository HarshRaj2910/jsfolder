import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ViewData.css'

function ViewData() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetchUser();
    },[]);
    const fetchUser = async () => {
        try
        {
            const res =  await fetch("http://localhost:5000/api/viewuser");
            const data = await res.json();
            setUser(data);
            //console.log(data);
        }
        catch(err)
        {
            console.error(err);
        }
        finally
        {
            setLoading(false);
        }
    }
    const handleDelete=async (id)=>{ 
        if(!window.confirm("Are you sure?"))return;
        const res=await fetch(`http://localhost:5000/api/deleteUser/${id}`,{
            method:"DELETE"
        });
        fetchUser();
    }
    if(loading) return <p>Loading...</p>;
  return (
    <div className='users-container'>
        <h1>Student List</h1>
        <table className='users-table'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>COUNTRY</th>
                    <th>GENDER</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(users => (
                        <tr key={users._id}>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.country}</td>
                            <td>{users.gender}</td>
                            <td><button className='btn btn-edit'>Edit</button>
                            <button className='btn btn-delete'
                            onClick={ ()=>handleDelete(users._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table> 
    </div> 
  )
}

export default ViewData