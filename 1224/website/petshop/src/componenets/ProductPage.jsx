import React,{useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './productspage.scss';
import { GiHollowCat } from "react-icons/gi";
import axios from 'axios';


const ProductPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/products/${id}`)
    .then((res)=>{
      setProduct(res.data);
      console.log(res.data);
    })
    .catch((err)=> console.log(err))
  },[id])

  return (
    <div className='productpage'>
      <button onClick={() => navigate(-1)} className='back-btn'>이전화면</button>
      <h1>상품 상세 페이지</h1>
      <div className="image-box">
      <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="profile-box">
       <GiHollowCat className='icon' />
       <div className="product-seller">{product.seller}</div>
      </div>
      <div className="contents-box">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
        <div className="createAt">2025.01.03</div>
      </div>
    </div>
  );
};

export default ProductPage;