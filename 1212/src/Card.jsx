import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './Shopping';

const Card = (id) => {
  const {shopping} = useContext(DataContext);
  return (
    // <Link to={`/detail/:id`} className="col">
    //     <img src={shopping[id].img} alt={shopping[id].title} />
    //     <p className="mt20 price">{shopping[id].price}</p>
    //     <h4 className="s-title">{shopping[id].title}</h4>
    //     <hr />
    //     <p className="category">{shopping[id].category}</p>
    // </Link>
    <div className="cards-container">
      {/* shopping 배열을 반복하여 각 상품에 대한 카드 생성 */}
      {shopping.map((product, index) => (
        <Link to={`/detail/${index}`} key={index} >
          <img src={product.img} alt={product.title} />
          <p className="mt20 price">{product.price}</p>
          <h4 className="s-title">{product.title}</h4>
          <hr />
          <p className="category">{product.category}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;