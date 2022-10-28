import { Image } from "react-bootstrap";
import { andrea, arina, sharly, julian, migaj, jhon } from "../../Assets/Stories";
import "./style.css";

const Story = () => {
  return (
    <div className="contentstori">
      <div className="scroller">
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={arina} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={sharly} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={julian} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={migaj} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={jhon} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
        <div className="scroller-item">
          <Image variant="top" src={andrea} className="rounded-circle" style={{ height: "90px", width: "90px" }} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Story;
