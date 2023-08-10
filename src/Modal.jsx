import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // piece of something, need that same thing everytime
  // different div everytime
  // this will be our modal
  const elRef = useRef(null);

  // if no elRef, make one
  if (!elRef.current) {
    elRef.current = document.createElement("div"); // creates div once
  }

  useEffect(() => {
    const modalRoot = document.getElementsByTagName("modal");
    modalRoot.appendChild(elRef.current);

    // whenever effect is returned, it will run that so it will unmount
    return () => modalRoot.removeChild(elRef.current);
  }, []); // only do this once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
