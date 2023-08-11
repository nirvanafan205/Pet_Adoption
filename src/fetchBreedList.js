// fetch method used with react query

// asyncrhonous function that takes an object as an argument
// destructing the queryKey property from it
// queryKey is an array that holds the parameters passed to the query when using React Query hook
const fetchBreedList = async ({ queryKey }) => {
  //animal var is extracted from the queryKey array
  //queryKey[1] indicates the second element in the array
  // represents animal type for which the breed list is being fetched
  const animal = queryKey[1];

  // if theres no animal provided, its falsy
  // function returns an empty array
  // defensive check to prevent API calls if no animal type is provided
  if (!animal) return [];

  // asynchronous API call using the fetch function to a specific endpoint
  // endpoint URL is constructed using the animal parameter to fetch list of breeds for the specified animal type
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  // response check
  // if okay, code parses the response body  using json method
  // returns a promise that resolves to the parsed JSON data
  // JSON data represents the list of pet breeds for the specified animal type
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  // return statement
  // returns parsed JSON data
  // contains list of breeds
  return apiRes.json();
};

export default fetchBreedList;

/*
    defines an asynchronous function that fetches a list of pet breeds for a given animal type
    using the React Query library
    Constructs API URL based on the provided animal type
    fetches data
    returns the list of breeds
    if theres an issue w/ the API response, it throws an error
*/
