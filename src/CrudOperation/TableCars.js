import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import "bootstrap/dist/js/bootstrap.bundle.min";
export const TableCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.log("test Table Cars");
    loadCars();
  }, []);

  const {id} = useParams();

  const loadCars = async () => {
    const result = await axios.get("http://localhost:8088/car");
    console.log(result.data);
    setCars(result.data)
  };

  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:8088/car/${id}`)
    loadCars()
  }

  return (
    <Wrapper className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Stock</th>
              <th scope="col">stars</th>
              <th scope="col">reviews</th>
              <th scope="col">price</th>
              <th scope="col">videoDesc</th>
              <th scope="col">image</th>
              <th scope="col">company</th>
              {/* <th scope="col">description</th> */}
              <th scope="col">category</th>
              <th scope="col">featured</th>
              <th scope="col">subImage1</th>
              <th scope="col">subImage2</th>
              <th scope="col">subImage3</th>
              <th scope="col">subImage4</th>
              <th scope="col">subImage5</th>
            </tr>
          </thead>
          <tbody>

            {
                cars.map((car,index)=>{
                   return <tr>
                   <th scope="row" key={car.id}>{index+1}</th>
                   <td>{car.name}</td>
                   <td>{car.stock}</td>
                   <td>{car.stars}</td>
                   <td>{car.reviews}</td>
                   <td>{car.price}</td>
                   <td>{car.videoDesc}</td>
                   <td>{car.image}</td>
                   <td>{car.company}</td>
                   {/* <td>{car.description}</td> */}
                   <td>{car.category}</td>
                   <td>{car.featured}</td>
                   {car.images.map((i)=>{
                    return <td>
                      {i.url}
                    </td>
                   })}
                   
                   <td>
                    {/* <button className="btn btn-primary mx-2">View</button> */}
                    <Link to={`/editUser/${car.id}`} className="btn btn-outline-primary">Edit</Link>
                    <button onClick={()=>deleteUser(car.id)} className="btn btn-danger mx-2">Delete</button>
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
