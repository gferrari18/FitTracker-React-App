import React, { useState } from "react";
import "../App.css";
import "./Regwindow.css";
import { Button2 } from "./Button2";
import axios from "axios";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom';

function Regwindow() {
  const navigate = useNavigate();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [reg, setReg] = useState("Register")
  const [hide, setHide] = useState(false)
  const [download, setDownload] = useState('Submit')

  const Login = () => {
    var url =
      "http://192.168.50.54:5000/login/" +
      inputRef1.current.value +
      "/" +
      inputRef2.current.value +
      "/" +
      inputRef3.current.value;
    axios.get(url).then(
      (response) => {
        alert(response.data.message);
        if (response.data.message === "Thank you for registering") {
          setHide(true)
          setReg('Download now!')
          setDownload('Download')
        }
        
      }
    );
  }

  const Link2 = () => {
    return navigate('/Download')
  }

  return (
    <div className='Register'>
    <div className="Regwindow-container">
    <video src="/videos/vid1.mp4" autoPlay loop muted />
      <h1>{reg}</h1>
      <form>
        <div>
          <input
            ref={inputRef1}
            className="Regwindow-input"
            name="email"
            type="email"
            placeholder="Your Email"
            hidden={hide}
          />
        </div>
        <div>
          <input
            ref={inputRef2}
            className="Regwindow-input"
            name="Username"
            type="Username"
            placeholder="Your Username"
            hidden={hide}
          />
        </div>
        <div>
          <input
            ref={inputRef3}
            className="Regwindow-input"
            name="Password"
            type="Password"
            placeholder="Your Password"
            hidden={hide}
          />
        </div>
        <div>
            <Button2
            onClick={download === 'Submit' ? Login : Link2}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >
            {download}
            </Button2>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Regwindow;
