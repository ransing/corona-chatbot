import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttonGroup.css'

function ButtonGroup(props) {
  const buttonWidth = {
    width: "350px"
  };
  return (
    <div className="buttonDiv">
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("fever");
          }}
        >
          Fever
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-secondary btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("chest");
          }}
        >
          Shortness of breath or difficulty breathing
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-warning btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("head");
          }}
        >
          Sore throat, Cough, Runny nose
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("aches");
          }}
        >
          Body Ache, Tiredness
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
