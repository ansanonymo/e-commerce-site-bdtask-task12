import { useRef } from "react";
import { productModalId } from "./../../ids";
import ProductModal from "./ProductModal";
function Modal() {
  const closeRef = useRef();
  return (
    <div>
      <input
        type="checkbox"
        ref={closeRef}
        className="peer hidden"
        id={productModalId}
      />

      <label
        className="fixed top-0 left-0 w-full h-full bg-black opacity-0 peer-checked:opacity-30 duration-200 pointer-events-none peer-checked:pointer-events-auto"
        htmlFor={productModalId}
      ></label>

      <ProductModal closeRef={closeRef} />
    </div>
  );
}

export default Modal;
