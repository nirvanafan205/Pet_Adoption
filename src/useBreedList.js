import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// custom hook
// fetches and provideds a list of breeds for a given animal type
// takes an animal parameter
export default function useBreedList(animal) {
  // uses useQuery hook which is used to fetch data related to the list of breeds for the specified animal
  // query key is specified as an array containing the strings breeds and the value of the animal parameter
  const results = useQuery(["breeds", animal], fetchBreedList);
  // fetchBreedList function is used as the query fetching function
  // responsible for fetching the list of breeds based on the provided animal type
  /*
      saying if this is availble, give me that
      if not dont give an error
      if any of this fails, give back an empty array 
  */

  // var holds data fetched using the useQuery hook
  // includes properties such as data ( containing the fetched data ) and status ( indicating the query status )
  return [results?.data?.breeds ?? [], results.status];

  // return statement of the hook uses the nullish operato
  //extracts the breeds array
  // if data strucutre is not available, an empty array is returned
}
