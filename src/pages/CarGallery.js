//Secret key: Z4SY4p577Q7sMIEFxEx4EiqE6Zw6-3U1JUQAmekpxIs

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import styled from "styled-components";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const clientID = `?client_id=aYWFQafTZei1P4e5Gj2sKMxtCGWipktF1K5siQ41j2E`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

//WITHOUT QUERY:
//https://api.unsplash.com/photos/?client_id=aYWFQafTZei1P4e5Gj2sKMxtCGWipktF1K5siQ41j2E&page=1

//WITH QUERY:
//https://api.unsplash.com/search/photos/?client_id=aYWFQafTZei1P4e5Gj2sKMxtCGWipktF1K5siQ41j2E&page=1&query=

const CarGallery = () => {
  const [loading, setLoading] = useState(false);
  //a list of photos that we're getting back from server
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);

  const [query, setQuery] = useState("toyota");

  const fetchImages = async () => {
    setLoading(true);
    let url;
    let urlPage = `&page=${page}`;
    let urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      // console.log(`innerHeight ${window.innerHeight}`);
      // console.log(`scrollY ${window.scrollY}`);
      // console.log(`bodyHeight ${document.body.scrollHeight}`);
      // console.log(`innerHeight + scrollY ${window.scrollY + window.innerHeight}`);

      if (
        !loading &&
        window.scrollY + window.innerHeight + 20 >= document.body.scrollHeight
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <Wrapper>
      {/* <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch></FaSearch>
          </button>
        </form>
      </section> */}

      <div className="title">
        <h2>Thư Viện Hình Ảnh Xe Toyota</h2>
        <div className="underline"></div>
      </div>

      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={image.id} {...image}></Photo>;
          })}
        </div>

        {/* {loading && <h2 className="loading">Loading...</h2>} */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  :root {
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);

    --clr-primary-5: hsl(205, 78%, 60%);

    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-primary-7: hsl(205, 90%, 76%);
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);

    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);

    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .search {
    padding: 5rem 0 0 0;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .search-form {
    display: flex;
  }
  .form-input {
    width: 100%;
  }
  .form-input,
  .submit-btn {
    padding: 0.75rem 1.25rem;
    border: none;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1.5rem;
    background: transparent;
    color: var(--clr-grey-5);
    border-bottom: 3px solid var(--clr-grey-5);
  }
  .form-input {
    color: var(--clr-grey-3);
  }
  .form-input::placeholder {
    color: var(--clr-grey-5);
  }
  .photos {
    padding: 5rem 0;
  }
  .photos-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }
  .photo {
    height: 17.5rem;
    position: relative;
    overflow: hidden;
  }
  .photo > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .photo h4 {
    margin-bottom: 0.5rem;
  }
  .photo p {
    margin-bottom: 0;
  }
  .user-img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .photo-info {
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    transform: translateY(100%);
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .photo:hover .photo-info {
    transform: translateY(0);
  }
  @media screen and (min-width: 576px) {
    .photos-center {
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    }
    .search-form {
      max-width: var(--fixed-width);
    }
  }

  .loading {
    text-align: center;
    padding: 3rem;
  }
  .title{
    margin-top:75px;
  }
`;

export default CarGallery;
