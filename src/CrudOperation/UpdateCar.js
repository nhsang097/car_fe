import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UpdateCar = () => {
  const { id } = useParams(); // get the car ID from the URL
  const [car, setCar] = useState(null); // store the car data

  useEffect(() => {
    // fetch the car data using the car ID
    fetch(`http://localhost:8080/getCar/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      })
      .catch((error) => {
        console.error("Error fetching car: ", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // call the update car API with the form data
  };

  const handleInputChange = (event) => {
    // update the form values as the user types
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Car</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={car.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Stock:
        <input
          type="text"
          name="stock"
          value={car.stock}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Stars:
        <input
          type="text"
          name="stars"
          value={car.stars}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Featured:
        <input
          type="checkbox"
          name="featured"
          checked={car.featured}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={car.price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={car.category}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={car.company}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
      <button>Cancel</button>
    </form>
  );
};


