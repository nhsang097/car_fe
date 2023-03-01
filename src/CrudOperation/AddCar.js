import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// export default function AddCar() {
//   let history = useHistory();

//   const [car, setCar] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8088/user", user);
//     history.push("/tableCar")
//   };


//   const { name, username, email } = user;

//   return (
//     <Wrapper className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Register User</h2>

//           <form onSubmit={(e)=> onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 name
//               </label>

//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 username
//               </label>

//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 email
//               </label>

//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>

//             <Link className="btn btn-outline-danger mx-2" to="/tableUser">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

const Wrapper = styled.section`
  margin-top: 80px;
`;
