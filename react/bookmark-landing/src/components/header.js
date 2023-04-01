import logo from "../images-react/logo-bookmark.svg";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <span>FEATURES</span>
        <span>PRICING</span>
        <span>CONTACT</span>
        <button className="red-button">LOGIN</button>
      </div>
    </div>
  );
}

export default Header;
