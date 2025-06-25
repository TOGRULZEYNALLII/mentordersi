

 import "./header.css";
function Header() {
  return (
    <>
      <header className="header">
        <h1>Guess</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </>
  );
}

export default Header;
