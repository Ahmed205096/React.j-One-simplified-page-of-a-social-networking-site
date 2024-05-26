import "./NavBarStyling.css";
export default function NavBar() {
  return (
    <>
      <div className="Nav">
        <div className="Nav-logo">
          <h3>Logo</h3>
        </div>
        <div className="Nav-links">
          <a id="home" href="/#">
            Home
          </a>
          <a id="about" href="/#">
            About
          </a>
          <a id="contact" href="/#">
            Contact
          </a>
          <div className="pretty1 pretty"></div>
          <div className="pretty2 pretty"></div>
          <div className="pretty3 pretty"></div>
        </div>
      </div>
    </>
  );
}
