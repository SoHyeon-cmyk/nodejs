import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Search = () => {
  const [searchKeyword,setSearchKeyword] = useState('')
  const navigate = useNavigate();
  //검색어 버튼이나 클릭, 엔터 입력시 호출될 함수
  const handleSearch = () =>{
    //검색어가 비어있지 않는 경ㅇ메나 내비게이션 수행 후 초기화
    if(searchKeyword){
      navigate(`/search/${searchKeyword}`)
      setSearchKeyword('')
    }
  }

  return (
    <div id='search'> 
      <div className='search__inner'>
        <label htmlFor='searchInput'>
          <span className='ir'>검색</span>
        </label>
        <input 
          type='search'
          id='searchInput'
          placeholder='검색어를 입력해주세요'
          autoComplete='off'
          className='search__input'
          onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => {
            if(e.key === 'Enter'){
              handleSearch()
            }
          }}
        />
      </div>
    </div>
  )
}

export default Search