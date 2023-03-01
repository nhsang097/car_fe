import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const TableUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("test Table users");
    loadUsers();
  }, []);

  const {id} = useParams();

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8088/user");
    console.log(result.data);
    setUsers(result.data)
  };

  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:8088/user/${id}`)
    loadUsers()
  }

  return (
    <Wrapper className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
                users.map((user,index)=>{
                   return <tr>
                   <th scope="row" key={user.id}>{index+1}</th>
                   <td>{user.name}</td>
                   <td>{user.username}</td>
                   <td>{user.email}</td>
                   <td>
                    {/* <button className="btn btn-primary mx-2">View</button> */}
                    <Link to={`/editUser/${user.id}`} className="btn btn-outline-primary">Edit</Link>
                    <button onClick={()=>deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>
                   </td>

                 </tr> 
                })
            }
            
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top:80px;
`
