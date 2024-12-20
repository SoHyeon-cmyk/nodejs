import React, { useContext } from 'react';
import { DataContext } from '../App';
import { useParams } from 'react-router-dom';


const Recipe = () => {
  const { data, loading } = useContext(DataContext)
  const { id } = useParams();
  const recipe = data ? data.find((item) => item.RCP_SEQ === id) : null

  if (loading) {
    return <h1>데이터 로딩 중</h1>
  }

  if (!loading) {
    return <h1>검색하신 레시피가 없습니다.</h1>
  }

  const { RCP_NA_TIP, RCP_NM, RCP_PARTS_DTLS, INFO_ENG, INFO_FAT, INFO_NA, ATT_FILE_NO_MK,INFO_CAR,INFO_PRO } = recipe
  const manuals = Array.from({ length: 20 }, (_, i) => ({
    desc: recipe[`MANUAL${String(i + 1).padStart(2, '0')}`],
    //padstart(2.'0') 두자리 변환해서 01,02
    img: recipe[`MANUAL_IMG${String(i + 1).padStart(2, '0')}`]
  })).filter((manual) => manual.desc) //설명이 존재하는 항목만, 없으면 제외

  return (
    <div className='recipeDetail'>
      <img src={ATT_FILE_NO_MK} alt="{RCP_NM}" className='recipeDetailMainImg' />
      <div className="recipeDetailTitle">{RCP_NM}</div>



      <div className="recipeDetailInfo1">
        <div className="info-title1">
          조리법
        </div>
        {
          manuals.map((manual, index) => manual.desc ? (
            <div key={index} className='desc_list'>
              <span className="desc-list">
                {manual.desc}
                <img src={manual.img} alt={RCP_NM} />
              </span>
            </div>) : null)
        }
      </div>

      <div className="recipeDetailInfo2">
        <div className="info-title2">
          영양정보
        </div>
        <div className="table">
          <div className="row">
            <span className="col">열량:</span>
            <span className="col">{INFO_ENG}kcal</span>
          </div>         
           <div className="row">
            <span className="col">탄수화물:</span>
            <span className="col">{INFO_CAR}g</span>
          </div>          
          <div className="row">
            <span className="col">단백질:</span>
            <span className="col">{INFO_PRO}kcal</span>
          </div>
          <div className="row">
            <span className="col">나트륨:</span>
            <span className="col">{INFO_NA}kcal</span>
          </div>
          <div className="row">
            <span className="col">지방:</span>
            <span className="col">{INFO_FAT}kcal</span>
          </div>
          <div className="tip">
            <span className="col">조리법 TIP :</span>
            <span className="col">{RCP_NA_TIP}</span>
          </div>
        </div>
      </div>



    </div>
  );
};




export default Recipe;