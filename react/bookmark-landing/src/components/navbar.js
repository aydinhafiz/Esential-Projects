function Navbar() {
  return (
    <div className="navbar">
      <div className="title-features">
        <span>Features</span>
      </div>
      <div className="description-of-features">
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="skills-of-bookmark">
        <span className="tab-item tab-item--active">Simple Bookmarking</span>
        <span className="tab-item">Speedy Searching</span>
        <span className="tab-item">Easy Sharing</span>
      </div>
    </div>
  );
}

export default Navbar;
