import React from 'react'

const NewsSection = () => {
  return (
    <section>
    <div className="inner">
      <h1>RECENT NEWS</h1>
      <div className="wrap">
        <article>
          <div className="pic">
            <img src="img/news1.jpg" alt=""/>
          </div>
          <h2><a href="#">Lorem ipsum</a></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora porro dignissimos</p>
        </article>
        <article>
          <div className="pic">
            <img src="img/news2.jpg" alt=""/>
          </div>
          <h2><a href="#">Lorem ipsum</a></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora porro dignissimos</p>
        </article>
        <article>
          <div className="pic">
            <img src="img/news3.jpg" alt=""/>
          </div>
          <h2><a href="#">Lorem ipsum</a></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora porro dignissimos</p>
        </article>
        <article>
          <div className="pic">
            <img src="img/news4.jpg" alt=""/>
          </div>
          <h2><a href="#">Lorem ipsum</a></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora porro dignissimos</p>
        </article>
      </div>
    </div>
  </section>
  )
}

export default NewsSection