// hook
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";

// array of animal types is defined
// used for populating the options in the animal select input
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// component made
// represents the search form for pet adoption
const SearchParams = () => {
  // requestParams state is initialized using the useState hook
  // holds current search parameters including: location, animal, and breed
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  /*
    keeps track of location
    depends on how user changes in the form
    hooks have to be balled in the same order everytime
  */
  // retrieved from AdoptedPetContext using the useContext hook
  // holds info about a pet that has been adopted
  const [adoptedPet] = useContext(AdoptedPetContext);

  // state and function too set it are initialized using the useState hook
  // keeps track of the selected animal type in the form
  const [animal, setAnimal] = useState("");

  // array obtained by called the useBreedList custom hook
  // passes the selected animal as a parameter
  // provides a list of breeds based on the seleceted animal
  const [breeds] = useBreedList(animal);

  // var holds the data fetched using the useQuery hook
  // fetches data based on the search parameters using fetchSearch function
  const results = useQuery(["search", requestParams], fetchSearch);

  // shows no pets are available
  // pets array is extracted
  // uses nullish operator
  // contains list of pets matching the serach criteria
  const pets = results?.data?.pets ?? [];

  // return section renders the search form
  return (
    // form is wrapped ina div
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            // contains input fuileds along with submit button
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          // if adoptedPet is available, diplsays an image of the adopted pet
          // select input allows user to choose an animal type from the predefined ANIMALS array
          // breed select input disables if there are no breeds availbe for the selected animal
          // otherwise, displays list of available breeds
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
    // when form is submitted, onSubmit handler updates requestParams state with the from data
    // triggers search for pets that match criteria
    // results components is used to dispaly the list of pets based on the search results
  );
};

export default SearchParams;

/*
  SearchParams component in React provides a search form for pet adoption
  Users can select a location, animal type, and breed to search for available pets
  Component uses various hoooks and custom hooks to manage the form state and fetch data based on the search criteria
  Results component is used to display the list of pets based on the search results
*/
