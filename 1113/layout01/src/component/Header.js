const Header = () =>{

  return (
    <header>
    <div className="inner">
      <h1><a href="#">LOGO</a></h1>

      <ul id="gnb">
        <li><a href="#">DEPARTMENT</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">YOUTUBE</a></li>
        <li><a href="#">COMMUNITY</a></li>
        <li><a href="#">LOCATION</a></li>
      </ul>

      <ul className="util">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">Sitemap</a></li>
      </ul>
    </div>
  </header>
  )
}

export default Header