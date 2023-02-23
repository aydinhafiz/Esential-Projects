import features1 from "../images-react/illustration-features-tab-1.svg"
import copypng from "../images-react/rectanglecopy.png"
function BoardAndInfo() {
  return (
    <div className="board-and-info">
      <div className="board">
        <img className="boarding" src={features1} alt="" />
        <img className="copypng" src={copypng} alt="" />
      </div>
      <div className="info">
        <span>Bookmark in one click</span>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div className="more-info-button">
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default BoardAndInfo