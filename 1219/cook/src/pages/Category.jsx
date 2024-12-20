import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';
import List from '../components/List'

const Category = () => {
  const {data,loading}= useContext(DataContext)
  const {category} = useParams();

  if(loading){
    return <h1 className='loading'>데이터 로딩 중</h1>
  }
    const filterData =data.filterDate((item)=> item.RCP_PAT2 === category)
  return (
    <div>
      <h2>{category}</h2>
      <List data={filterData}/>
    </div>
  );
};

export default Category;