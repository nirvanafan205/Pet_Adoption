// hook
import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// component made
const SearchParams = () => {
  // keeps track of location
  // depeonds on how user changes in the form
  // hooks have to be called in the same order
  const [location, setLocation] = useState(""); // tihs is a hook, check if you see 'use'

  const [animal, setAnimal] = useState("");

  const [breed, setBreed] = useState("");

  const [breeds] = useBreedList(animal);

  // searches pet from the api
  // useEffect happens outside of component to the API
  const [pets, setPets] = useState([]);

  // request pets on submit events
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            // something change, it will update itself
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // clears out the breed when new animal is picked
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              // an array of components
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            // disables clickability if no breeds
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              // an array of components
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
