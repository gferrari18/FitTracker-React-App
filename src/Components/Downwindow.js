import "../App.css";
import "./Downwindow.css";
import { Button2 } from "./Button2";

function Downwindow() {

  return (
    <div className='Download'>
    <div className="Downwindow-container">
    <video src="/videos/vid3.mp4" autoPlay loop muted />
        <h1>Download now!</h1>
          <a href="https://www.google.com/">
            <Button2
            onClick={null}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >
            Download
            </Button2> 
          </a>
          <p>
            <a href="https://dev.mysql.com/downloads/connector/odbc/">
            Download required file
            </a>
            </p>
    </div>
    </div>
  );
}

export default Downwindow;
