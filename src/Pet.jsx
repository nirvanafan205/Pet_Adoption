import { Link } from "react-router-dom";

// accepts a set of props
const Pet = (props) => {
  //name, animal, breed, images, location, and id are destructuedd from the props object
  const { name, animal, breed, images, location, id } = props;

  // var initialized w/ default image
  // used as default image in case the images array is empty
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  // if images array is not empty
  // hero var is updated to use the first image URL from the images array
  if (images.length) {
    hero = images[0];
  }

  // renders Link component that navigates to the '/details/${id}route when clicked
  // id parameter is used in the URL to identify the specific pet
  // Link componente contains two main sections
  // image-container div that holds an img elemtn
  // src attribute of the img elment is set to the hero
  // URL and the alt attribute is set to the pets name
  // info div dipslays pets name, animal type, breed, and location
  // pets name is displayed in h1 element
  // info about hte pets animal type, breed, and location is dispolayed in an h2 elemetn
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

/*
  Pet component in React that reps a card or item displaying info about a pet.
  Includes: image, pets name, animal type, breed, and location
  COmponent is designed to be used in a list of pets and provide a link to view more dtail about the specific pet when clicked
*/
