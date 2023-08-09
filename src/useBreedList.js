import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  /*
      saying if this is availble, give me that
      if not dont give an error
      if any of this fails, give back an empty array 
  */
  return [results?.data?.breeds ?? [], results.status];
}
