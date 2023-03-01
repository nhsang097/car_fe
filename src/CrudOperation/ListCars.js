import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const ListCars = () => {
    const [cars, setCars] = useState([]);
    const history = useHistory();
  
    useEffect(() => {
      fetch("http://localhost:8080/getAllCars")
        .then((response) => response.json())
        .then((data) => {
          setCars(data);
        })
        .catch((error) => {
          console.error("Error fetching cars: ", error);
        });
    }, []);
  
    const handleDeleteCar = (id) => {
      console.log(id);
      fetch(`http://localhost:8080/deleteById/${id}`, {
        method: "DELETE"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete car");
          }
          // re-fetch the cars from the API after a car has been deleted
          return fetch("http://localhost:8080/getAllCars");
        })
        .then((response) => response.json())
        .then((data) => {
          setCars(data);
        })
        .catch((error) => {
          console.error("Error deleting car: ", error);
        });
    };
  
  
    return (
      <Wrapper>
        <Title>All Cars</Title>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Stars</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.stock}</td>
                <td>{car.stars}</td>
                <td>{car.price}</td>
                <td>{car.category}</td>
                <td>{car.company}</td>
                
                <td>
                  <Button onClick={() => handleDeleteCar(car.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    );
  };
  
  
  

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #f9a828;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 0;
`;

const Table = styled.table`
  width: 90%;
  max-width: 1200px;
  border-collapse: collapse;
  margin-top: 2rem;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f9a828;
    font-weight: bold;
  }

  td {
    font-size: 16px;
    font-weight: 400;
    color: #222;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #eee;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f5f5f5;
  }

  tbody tr:hover {
    background-color: #ddd;
  }
`;