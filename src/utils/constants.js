import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Trang Chủ',
    url: '/',
  },
  {
    id: 2,
    text: 'Giới Thiệu',
    url: '/about',
  },
  {
    id: 3,
    text: 'Chọn Xe',
    url: '/products',
  },
  {
    id: 4,
    text: 'tableUser',
    url: '/tableUser',
  },
  {
    id: 5,
    text: 'addUser',
    url: '/addUser',
  },
  {
    id: 6,
    text: 'tableCar',
    url: '/tableCar',
  },
  // {
  //   id: 7,
  //   text: 'addCar',
  //   url: '/addCar',
  // },
  {
    id: 8,
    text: 'List Car',
    url: '/cars',
  },

  
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
