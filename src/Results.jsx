import Pet from "./Pet";

// accepts pets prop
const Results = ({ pets }) => {
  return (
    // comp[onent is wrapped in a div elemnet w/ class name of search
    // inline conditional rendering is used to check if there are any pets in pets array
    <div className="search">
      {!pets.length ? (
        // if empty, message is displayed within an h1 elment
        <h1>No Pets Found</h1>
      ) : (
        // for each pe
        // pet compononet is rendered w/ various props passed to it
        // props include: animal, name, breed, images, location, and id based on the corresponding properties of the current pet
        // key prop is set to the id of the pet
        // helps update list when changes occur
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;

/* 
    Results component in React that displays a list of pet cards
    based on an array of pet data passed as a prop
    If theres no pets in the array, message  is displayed
    If there are pets, each pet is rendered using Pet component
    creates a list of pet careds with individual pet details
*/
