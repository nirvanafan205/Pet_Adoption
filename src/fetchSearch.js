// asynchronous function
// used w/ React Query library to fetch a list of pets
// search parameters: animal, type, location, breed
// takes an object as an argument, destructs queryKey
async function fetchSearch({ queryKey }) {
  // animal, location, and breed vars are extracted
  const { animal, location, breed } = queryKey[1];

  // fetches data w/ async API call using fetch fcntion to an endpoint
  // endpoint URL is construced using the animal, location, and breed parameters
  // fetches a list of pets that match the specified search criteria
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  // chckes if response from API is not ok
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  // parsed JSON data
  // list of pets matching search critieria
  return res.json();
}

export default fetchSearch;

/*
    asynch function
    fetches list of pets based on animal type, location, and breed using React Query
    constructs API URL based on parameters
    fetches data
    returns list of pets that matchse the criteria
*/
