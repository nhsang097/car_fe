import React, { useState, useEffect } from "react";
import axios from "axios";

export const CarUpdateForm = ({ carId }) => {
  const [car, setCar] = useState({});
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [stars, setStars] = useState("");
  const [reviews, setReviews] = useState("");
  const [image, setImage] = useState("");
  const [videoDesc, setVideoDesc] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      const res = await axios.get(`/cars/${carId}`);
      setCar(res.data);
      setName(res.data.name);
      setStock(res.data.stock);
      setStars(res.data.stars);
      setReviews(res.data.reviews);
      setImage(res.data.image);
      setVideoDesc(res.data.videoDesc);
      setPrice(res.data.price);
      setDescription(res.data.description);
      setCategory(res.data.category);
      setCompany(res.data.company);
      setImages(res.data.images);
    };

    fetchCar();
  }, [carId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedCar = {
      name,
      stock,
      stars,
      reviews,
      image,
      videoDesc,
      price,
      description,
      category,
      company,
      images,
    };

    const res = await axios.put(`/update/${carId}`, updatedCar);
    console.log(res);
  };

  const handleImageChange = (e) => {
    const newImages = [...images];
    newImages.push(e.target.value);
    setImages(newImages);
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Stock:
        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
      </label>
      <br />
      <label>
        Stars:
        <input type="text" value={stars} onChange={(e) => setStars(e.target.value)} />
      </label>
      <br />
      <label>
        Reviews:
        <input type="text" value={reviews} onChange={(e) => setReviews(e.target.value)} />
      </label>
      <br />
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Video Description:
        <input type="text" value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="coupe">Coupe</option>
          <option value="convertible">Convertible</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </label>
      <br />
      <label>
        Company:
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes-benz">Mercedes-Benz</option>
          <option value="porsche">Porsche</option>
          <option value="tesla">Tesla</option>
        </select>
      </label>
      <br />
      <label>
        Images:
        <input type="file" multiple onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Update Car</button>
    </form>
  );
}