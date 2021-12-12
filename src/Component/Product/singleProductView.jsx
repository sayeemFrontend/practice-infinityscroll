import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductView = () => {
  const [madal, setModal] = useState(true);
  const location = useLocation();
  localStorage.setItem("path", location.pathname);
  if (madal === true) {
    return (
      <div onClickCapture={() => setModal(false)} className="modalContainer">
        <div
          onClickCapture={() => setModal(madal)}
          className={madal ? "customModal positionTwo " : " customModal "}
        >
          <div className="">Product Details On Modal</div>
        </div>
      </div>
    );
  }

  return <div>product vew here</div>;
};

export default ProductView;
