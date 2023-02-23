function BrowserPanel() {
  return (
    <div className="browsers-panel">
      <div className="browser-chrome">
        <img src="./images/logo-chrome.svg" alt="" className="chrome" />
        <span>Add to Chrome</span>
        <p>Minimum version 62</p>
        <img src="./images/Combined Shape.png" alt="" className="line" />
        <div className="button-panel">
          <button>Add & Install Extension</button>
        </div>
      </div>
      <div className="browser-firefox">
        <img src="./images/logo-firefox.svg" alt="" className="firefox" />
        <span>Add to Firefox</span>
        <p>Minimum version 55</p>
        <img src="./images/Combined Shape.png" alt="" className="line" />
        <div className="button-panel">
          <button>Add & Install Extension</button>
        </div>
      </div>
      <div className="browser-opera">
        <img src="./images/logo-opera.svg" alt="" className="opera" />
        <span>Add to Opera</span>
        <p>Minimum version 46</p>
        <img src="./images/Combined Shape.png" alt="" className="line" />
        <div className="button-panel">
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
}

export default BrowserPanel