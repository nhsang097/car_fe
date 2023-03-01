import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CarServices = () => {
  const services = [
    {
      carServiceId: 91,
      carServiceName: "Bảo Dưỡng",
      carServiceImage:
        "https://www.cannonautorepair.com/images/mechanic_with_customer.jpeg",
      carServiceDesc: "Complete engine tune-up service.",
    },
    {
      carServiceId: 92,
      carServiceName: "Sửa Chữa",
      carServiceImage:
        "https://sydneycarrepair.com.au/wp-content/uploads/2020/03/sydney-mechanic-and-smash-repair-sydney-car-repair-auto-repair-sydney-03-770-x-355.jpg",
      carServiceDesc: "Rotate tires and check tire pressure.",
    },
    {
      carServiceId: 99,
      carServiceName: "Lái Thử",
      carServiceImage: "https://i.ytimg.com/vi/1wbepytTUWI/maxresdefault.jpg",
      carServiceDesc: "Replace old battery with a new one.",
    },
    {
      carServiceId: 101,
      carServiceName: "Rửa Xe",
      carServiceImage:
        "http://pro-care.vn/wp-content/uploads/2021/04/about-2.jpg",
      carServiceDesc: "Replace brake pads with high-quality OEM parts.",
    },
  ];

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerBirthday: "",
    customerGender: "",
    customerPhone: "",
    dateAppointment: "",
    serviceName: "",
    serviceArea: "",
    status: "Incomplete",
  });

  const [showForm, setShowForm] = useState(false);

  const handleServiceClick = (service) => {
    setShowForm(true);
    setCustomerInfo({
      ...customerInfo,
      serviceName: service.carServiceName,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/addCustomerInfo", customerInfo)
      .then((response) => {
        console.log(response.data);
        // Clear form fields
        setCustomerInfo({
          customerName: "",
          customerBirthday: "",
          customerGender: "",
          customerPhone: "",
          dateAppointment: "",
          serviceName: "",
          serviceArea: "",
          status: "Incomplete",
        });
        alert("Bạn đã gửi thông tin thành công, chúng tôi sẽ liên hệ sớm thôi");
        // setShowForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <h2>Dịch Vụ Của Chúng Tôi</h2>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.carServiceId}
            className="service-blurb"
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.carServiceImage} alt={service.carServiceName} />
            <h3>{service.carServiceName}</h3>
            <p>{service.carServiceDesc}</p>
          </div>
        ))}
      </div>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Tên Khách Hàng:
            <input
              type="text"
              name="customerName"
              value={customerInfo.customerName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ngày Sinh:
            <input
              type="date"
              name="customerBirthday"
              value={customerInfo.customerBirthday}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Giới Tính:
            <select
              name="customerGender"
              value={customerInfo.customerGender}
              onChange={handleInputChange}
            >
              <option value="">-- Chọn giới tính --</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </label>
          <label>
            Số Điện Thoại:
            <input
              type="tel"
              name="customerPhone"
              value={customerInfo.customerPhone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ngày Hẹn:
            <input
              type="date"
              name="dateAppointment"
              value={customerInfo.dateAppointment}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Khu Vực:
            <select
              name="serviceArea"
              value={customerInfo.serviceArea}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Bình Dương">Bình Dương</option>
              <option value="Hải Phòng">Hải Phòng</option>
            </select>
          </label>

          <label>
            Dịch Vụ Bạn Muốn Làm:
            <select
              name="serviceName"
              value={customerInfo.serviceName}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Bảo Dưỡng">Bảo Dưỡng</option>
              <option value="Sửa Chữa">Sửa Chữa</option>
              <option value="Lái Thử">Lái Thử</option>
              <option value="Rửa Xe">Rửa Xe</option>
            </select>
          </label>


          <button type="submit">Đặt Lịch</button>
        </form>
      )}
    </Wrapper>
  );
};

export default CarServices;

const Wrapper = styled.section`
  h2 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .service-blurb {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    background-color: #f8f8f8;
    margin: 1rem;
    cursor: pointer;
    img {
      max-width: 100%;
      height: auto;
    }

    h3 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    p {
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      text-align: left;

      input,
      select {
        margin-top: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        background-color: #f2f2f2;
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: none;
      background-color: #1abc9c;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
