// ***** Import Statements *****
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

// defined as a functional component
const Details = () => {
  // extracted from the URL  w/ useParams hook
  const { id } = useParams();

  // showModal state and the setShowModal updater function are defined w/ useState hook
  // used to control whether the adoption modal is displayed
  const [showModal, setShowModal] = useState(false);

  // function is obtained using the useNavigate hook
  // used to navigate to different routes
  const navigate = useNavigate();

  // query key provided to fetchpet.js
  // used to fetch pet details with fetchPet function
  // query key is based on the id parameter
  const results = useQuery(["details", id], fetchPet);

  // is obtained from the AdoptedPetContext w/ useContext hook
  // used to update the context w/ the adopted pet
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  // if data is still loading, pizza emoji is displayed
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🍕</h2>
      </div>
    );
  }

  // pet is loaded/available
  const pet = results.data.pets[0];

  // shows modal when clicked, it will be shown now
  // hides it when user clicks No button
  // once the data is loaded, 'pet' object is extracted from the fetch data
  // component's UI includes a carousel of images
  // using 'Carousel' component
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    // if the showModal state is true
                    // modal dialog is shown with the option to adopt the pet
                    // yes sets the adopted pet using the context and navigates to the homepage
                    // clicking no closes the modal
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

// ***** DetailsErrorBoundary Component ******
// functional component that wraps the Details component in an ErrorrBoundary component
// handles any errors that occurs within the Details component and provide a fallback UI or error emssage
export default function DetailsErrorBoundary(props) {
  return (
    // goes directly through the error boundary
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

/*
    defines React component Details that displays detailed information about a pet
    includes images, name, type, breed, location, and description
    provides an option to adopt the pet through a modal dialog
    wraps the Details component in an ErrorBoundary component to handle potential errors 
*/
