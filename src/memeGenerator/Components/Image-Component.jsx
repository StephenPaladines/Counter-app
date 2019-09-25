import React from "react";

const ImageComponent = props => {
  return (
    <div className="container">
      <div className="test">
        <div className="inputs">
          <input
            type="text"
            placeholder={"Top Text"}
            value={props.upperText}
            name={"upperText"}
            onChange={props.handleChange}
          />
          <input
            type="text"
            placeholder={"Lower Text"}
            value={props.lowerText}
            name={"lowerText"}
            onChange={props.handleChange}
          />
          <button onClick={props.generateImage}>Generate</button>
        </div>
        <br />
        <div className="img-container">
          <img src={props.imageSrc} alt="" id="#image" />
          {console.log("Testing... " + props.imageSrc)}
          <p id="upperText">{props.upperText}</p>
          <p id="lowerText">{props.lowerText}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
