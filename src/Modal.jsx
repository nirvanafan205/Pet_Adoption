import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// accepts a child prop
// represents content to be displayed inside modal
const Modal = ({ children }) => {
  // piece of something, need that same thing everytime
  // different div everytime
  // this will be our modal
  // used to hold a reference to the DOM elment where the
  // modal content will be rendered
  const elRef = useRef(null);

  // if no elRef, make one
  if (!elRef.current) {
    elRef.current = document.createElement("div"); // creates div once
  }

  // effect is set up using the useEffect hook
  useEffect(() => {
    // runs only once when the component mounts
    const modalRoot = document.getElementById("modal");
    // appends a div elment to a div with the id modal
    modalRoot.appendChild(elRef.current);

    // whenever effect is returned, it will run that so it will unmount
    return () => modalRoot.removeChild(elRef.current);
    // places modal content outside of the components normal rendering flow
  }, []); // only do this once

  // used to render the children inside elRef.current container
  // renders provided content in a differnt part of the DOM that is not part of the main component tree
  // method takes two arguments
  // content to be rendered
  // and the target DOM elemnt
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

/*
  creates a modal dialog
  modal content provided as children
  rendered using createPortal method inside a div elment
  appeneded to a div with the id modal in the DOM
  allos one to create modals w/ content that is rendered outside normal component tree
  makes it possible to overlay content on top of the main application
*/
