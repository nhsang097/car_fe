import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const {isSidebarOpen,openSidebar,closeSidebar} = useProductsContext();
  const { myUser } = useUserContext()
  let linksTemp = links.slice(0,3);
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="https://toyota-ansuongquan12.com/wp-content/uploads/2022/11/Toyota-Logo-Feature_o.jpeg" alt="comfy sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          
          {linksTemp.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}

{myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`

width: 100%;
position:fixed;
z-index: 99;
top:0px;
display: block;
background-color: white;
  // height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      margin-bottom: 0rem;
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
