import "./layout.css";
import { Link } from "react-router-dom";
function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <div className="layout_navbar">
        <div className="layout_logo">BKRES</div>
        <div className="layout_link">
          <Link to="/" className="layout_navbar_item">
            <i class="fa-solid fa-house icon_home"></i> Home
          </Link>
          <Link to="/" className="layout_navbar_item">
            <i class="fa-solid fa-phone icon_home"></i> Contact
          </Link>
          <Link to="/" className="layout_navbar_item">
            <i class="fa-solid fa-book icon_home"></i> Post
          </Link>
        </div>
        <div className="layout_search">
          <i
            class="fa-solid fa-magnifying-glass icon_home"
            style={{ padding: "2px 10px", marginBottom: "0px" }}
          ></i>
          <input />
        </div>
      </div>
      <div
        style={{
          paddingTop: "",
        }}
        className="layout_container"
      >
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
