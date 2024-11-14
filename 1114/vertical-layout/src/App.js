import { useEffect, useState } from 'react';
//외부에서 생성한 스타일 컴포넌트를 임포트해서 내부에 사용
import { Header, HeaderTitle, Main, NavItem, NavList, FilterList, FilterItem, Article, ArticleDiv, ArticleTitle, ArticleContent, ArticleImg } from './styled'
//아이콘 임포트
import { FaTwitterSquare, FaFacebook, FaEnvelope } from 'react-icons/fa';

//라이브러리 api
import Isotope from 'isotope-layout';

function App() {

  //iso객체를 할당할 상태변수
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    const iso = new Isotope('.section', {
      itemSelector: Article,
      columnWidth: Article,
      transitionDuration: '0.5s',
    })

    setIsotope(iso)
  }, [])


  //버튼을 클릭했을 때, 해당article만 화면에 나오도록 제어하는 함수
  const filterItems = (filter) => {//filter는 odd, even, all가 전달되는 화면에 표시할 아티클의 클래스네임
    if(isotope){
      isotope.arrange({filter})
    }
  }

  const articles = [
    { id: 1, src: './img/p1.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 2, src: './img/p2.jpg', title: 'Here comes title.', className: 'even' },
    { id: 3, src: './img/p3.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 4, src: './img/p4.jpg', title: 'Here comes title.', className: 'even' },
    { id: 5, src: './img/p5.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 6, src: './img/p6.jpg', title: 'Here comes title.', className: 'even' },
    { id: 7, src: './img/p7.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 8, src: './img/p8.jpg', title: 'Here comes title.', className: 'even' },
    { id: 9, src: './img/p9.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 10, src: './img/p10.jpg', title: 'Here comes title.', className: 'even' },
    { id: 11, src: './img/p11.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 12, src: './img/p12.jpg', title: 'Here comes title.', className: 'even' },
    { id: 13, src: './img/p13.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 14, src: './img/p14.jpg', title: 'Here comes title.', className: 'even' },
    { id: 15, src: './img/p15.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 16, src: './img/p16.jpg', title: 'Here comes title.', className: 'even' },
    { id: 17, src: './img/p17.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 18, src: './img/p18.jpg', title: 'Here comes title.', className: 'even' },
    { id: 19, src: './img/p19.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 20, src: './img/p20.jpg', title: 'Here comes title.', className: 'even' },
  ];
  return (
    <>
      <Header>
        <HeaderTitle>DECODE LAB</HeaderTitle>
        <NavList>
          <NavItem><FaTwitterSquare />Twitter</NavItem>
          <NavItem><FaFacebook />Facebook</NavItem>
          <NavItem><FaEnvelope />E-mail</NavItem>
        </NavList>
      </Header>
      <Main>
        <FilterList>
          {/* 화면에 표시할 클래스 이름을 filterItems함수의 인자로 전달 */}
          <FilterItem onClick={() => filterItems('*')}>ALL</FilterItem>
          <FilterItem onClick={() => filterItems('.odd')}>ODD</FilterItem>
          <FilterItem onClick={() => filterItems('.even')}>EVEN</FilterItem>
        </FilterList>
        <section className='section'>
          {/* articles배열을 순회하여 배열요소를 article매개변수에 할당
          article의 갯수만큼 article객체에 할당한 데이터를 사용하여 카드 요소를 추가
          */}
          {articles.map(article => (
            <Article className={article.className} key={article.id}>
              <ArticleDiv>
                <ArticleImg src={article.src} alt="" />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleContent>Here comes content description in detail.</ArticleContent>
              </ArticleDiv>
            </Article>
          ))}
        </section>
      </Main>
    </>
  );
}

export default App;
