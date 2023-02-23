import logo from "../images-react/logo-bookmark.svg"
function Header() {
  return (
    <div class="header">
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="options">
        <span>FEATURES</span>
        <span>PRICING</span>
        <span>CONTACT</span>
        <button class="red-button">LOGIN</button>
      </div>
    </div>
  );
}

export default Header