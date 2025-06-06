import { useEffect, useRef } from "react";
/* 
Function to show navbar when the page is scrolled
 */
function Header({ navItem = "placeholder" }) {
  const navRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;

    const handleScroll = () => {
      if (window.pageYOffset >= 0) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    };

    /*     Adding then removing eventListener
     */
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header id="main-nav" ref={navRef}>
      <h1 className="home">Faded Frame</h1>
      <nav>
        <div className="nav-item">
          <a href="#">
            <p className="nav-text">{navItem}</p>
          </a>
        </div>
        <div className="nav-item">
          <a href="#">
            <p className="nav-text">{navItem}</p>
          </a>
        </div>
        <div className="nav-item">
          {" "}
          <a href="#">
            <p className="nav-text">{navItem}</p>
          </a>
        </div>
        <div className="nav-item">
          {" "}
          <a href="#">
            <p className="nav-text">{navItem}</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
