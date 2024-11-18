
import { useSearchParams } from "react-router-dom";
// //쿼리에서 ?를 지우고 &를 분리한 뒤 key와 value로 파싱하는 작업


function About() {
  //   const location = useLocation(); //현재 보여지는 페이지의 정보를 가짐
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");//get메서드로 detail값을 조회
  const page = parseInt(searchParams.get("page") || "0");//get메서드로 page값을 조회시 없으면 0반환

  function onToggleDetail() {
     //setSeartchParams로 파라미터값을 인자로 받아옴
    setSearchParams((prev) => ({
      ...prev,
      detail: detail === "true" ? "false" : "true",
      page,
    }));
  }

  function onIncreasePage() {
    setSearchParams((prev) => ({ ...prev, detail, page: page + 1 }));
  }

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail : {detail}</p>
      <p>page : {page}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreasePage}>page + 1</button>
    </div>
  );
}

export default About;