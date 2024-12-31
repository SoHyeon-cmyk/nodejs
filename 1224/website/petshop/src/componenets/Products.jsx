import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import './products.scss'
import { LuCat } from "react-icons/lu";
import axios from 'axios';



const Products = () => {
  const navigate = useNavigate()
  // axios.get('http://localhost:3000/products').then((res)=>{
  //   console.log(res)
  // }).catch((err)=>{
  //   console.log(err)
  // })

  return (
    <div className='products'>
      <h2>Products</h2>
      <p>상품업로드</p>
      <button className='button' onClick={()=>navigate('/uploadpage')}>상품 업로드</button>
      <div className="products-list">

        <div className="products-card">
          <Link to="">
          <div className="productsImg">
            <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
          </div>
          <div className="productsCnt">
            <span className="products-name">고양이 사료</span>
            <span className="products-price">50000</span>
            <span className="products-seller">
            <LuCat />
            <strong>캣컵</strong>
            </span>
          </div>
          </Link>
        </div>

        <div className="products-card">
          <Link to="">
          <div className="productsImg">
            <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
          </div>
          <div className="productsCnt">
            <span className="products-name">고양이 사료</span>
            <span className="products-price">50000</span>
            <span className="products-seller">
            <LuCat />
            <strong>캣컵</strong>
            </span>
          </div>
          </Link>
        </div>

        <div className="products-card">
          <Link to="">
          <div className="productsImg">
            <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
          </div>
          <div className="productsCnt">
            <span className="products-name">고양이 사료</span>
            <span className="products-price">50000</span>
            <span className="products-seller">
            <LuCat />
            <strong>캣컵</strong>
            </span>
          </div>
          </Link>
        </div>
        
        <div className="products-card">
          <Link to="">
          <div className="productsImg">
            <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
          </div>
          <div className="productsCnt">
            <span className="products-name">고양이 사료</span>
            <span className="products-price">50000</span>
            <span className="products-seller">
            <LuCat />
            <strong>캣컵</strong>
            </span>
          </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Products;