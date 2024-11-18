import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1); //이전 페이지로 이동
  }

  function goArticles() {
    navigate("/articles", { replace: false }); //articles 경로로 이동 replace:true=> 히스토리에 경로가 남지 않아 뒤로가기x
  }

  return (
    <div>
      <header style={{ background: "lightsteelblue", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;