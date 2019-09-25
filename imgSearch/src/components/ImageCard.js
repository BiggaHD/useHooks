import React, { useState, useRef, useEffect } from "react";

const ImageCard = props => {
  const [spans, setSpans] = useState(0);
  let imageRef = useRef();

  const spanCalculation = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    // Set the state w/ the new number od spans value
    setSpans(spans);
  };

  useEffect(() => {
    // Run ONLY after the DOM loads
    imageRef.current.addEventListener("load", spanCalculation);
  }, []);

  const { description, urls } = props.image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
