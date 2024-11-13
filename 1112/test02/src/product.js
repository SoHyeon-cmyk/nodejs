import React from 'react'
import useForm from './useForm'

const Product = () => {

  const initValue = { title: "", price: NaN, category: "" };
  const [product, handler] = useForm(initValue);

  return (
    <div id='app'>
      <h1>입력폼</h1>
      <div className='control'>
        <input type='text' placeholder='제품명'
          onChange={handler} value={product.title} name='title' />
      </div>


      <div className='control'>제품명
        <input type='number' placeholder='가격'
          onChange={handler} value={product.price} name='price' />
      </div>


    <select
    onChange={handler} value={product.category} name='category'>
      <option value=""제품유형을 선택하세요></option>
      <option>음료</option>
      <option>빵</option>
      <option>과자</option>
    </select>

      <h1>입력된 값</h1>


      <div className='contorl'>제품명:{product.title}</div>
      <div className='contorl'>가격:{product.price}</div>
      <div className='contorl'>제품유형:{product.category}</div>

    </div>
  )
}

export default Product