import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  // console.log(useHistory());
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`, id);
    // console.log(id);
    // eslint-disable-next-line
  }, [id]);

  //if error happens, after 4 seconds, auto navigate to homepage
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 4000);
  //   }
  //   // eslint-disable-next-line
  // }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product></PageHero>

      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>

        <div className=" product-center">
          <ProductImages images={images} />

          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price"> {formatPrice(price)}</h5>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Số lượng: </span>
              {stock > 0 ? `Chỉ còn ${stock} chiếc` : "hết hàng"}
            </p>
            {/* <p className='info'>
              <span>SKU : </span>
              {sku}
            </p> */}
            <p className="info">
              <span>Đại Lý Có Hàng: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>

      <div className="description-center">
        <div className="video-youtube">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/plkUSipAO2I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="sub-text">
          <p>
            Toyota Land Cruiser Prado là mẫu xe nằm trong phân khúc xe SUV 7 chỗ
            cỡ lớn, cạnh tranh trực tiếp với Ford Explorer. Xe được nhập khẩu
            Trung Đông với duy nhất 1 phiên bản. Chiếc xe ô tô 7 chỗ Toyota cỡ
            lớn này trang bị động cơ xăng 2.7L cho công suất cực đại 161 mã lực
            tại 5.200 vòng/phút, mô men xoắn cực đại 246Nm tại 3.900 vòng/phút,
            kết hợp hộp số tự động 6 cấp, dẫn động 2 cầu. Động cơ được đánh giá
            vận hành ổn, nổi bật với sự dẻo dai và độ bền bỉ cao.
          </p>

          <img
            src="https://ssa-api.toyotavn.com.vn/Resources/Images/31BF8B1FD66DC857FBD775C342119EBD.jpg"
            alt="fdsfe"
          />

          <p>
            Land Cruiser được trang bị động cơ xăng 3.5L V6 Twin Turbo cho công
            sức cực đại 409 mã lực tại vòng tua máy 5.200 vòng/phút, mô men xoắn
            cực đại 650Nm tại 2.000 – 3.600 vòng/phút, kết hợp hộp số tự động 10
            cấp, dẫn động 2 cầu. Động cơ được đánh giá vận hành rất khoẻ, khả
            năng tăng tốc ấn tượng, vận hành bền bỉ cao. Khả năng off-road của
            Toyota Land Cruiser cũng rất ấn tượng.
          </p>
          <img
            src="https://img1.oto.com.vn/2021/02/23/pTBR3JY9/gia-xe-toyota-vios-oto-com-vn-1-a87f.jpg"
            alt="vfdsvre"
          />

<p>
            Land Cruiser được trang bị động cơ xăng 3.5L V6 Twin Turbo cho công
            sức cực đại 409 mã lực tại vòng tua máy 5.200 vòng/phút, mô men xoắn
            cực đại 650Nm tại 2.000 – 3.600 vòng/phút, kết hợp hộp số tự động 10
            cấp, dẫn động 2 cầu. Động cơ được đánh giá vận hành rất khoẻ, khả
            năng tăng tốc ấn tượng, vận hành bền bỉ cao. Khả năng off-road của
            Toyota Land Cruiser cũng rất ấn tượng.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .content {
    h2 {
      align-items: center;
    }
  }
  .sub-text {
    font-size:23px;
    margin-left: 80px !important;
    margin-right: 80px !important;
    display: grid;
    img {
      margin: 0 auto;
      width: 70%;
    }
    p{
      margin-top: 30px !important;
    }
  }

  .description-center {
    // display: grid;
    // justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
  }
  .video-youtube {
    display: flex;
    justify-content: center;
  }

  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
