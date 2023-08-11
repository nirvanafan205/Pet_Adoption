// fetch method used with react query
// asyncrhonous function that takes an object as an argument
// queryKey is an array that holds the parameters passed to the query w/ the React Query hook
const fetchPet = async ({ queryKey }) => {
  // id var is extracted
  // indicates second element in the array
  // represents the ID of the pet for which the details are being fetched
  const id = queryKey[1];

  // asynchronous API call using the fetch function to a specific endpoint
  // endpoint URL is constructed using the id paramtert to fetch
  // detailed info for the specified pet ID
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // response check
  // after fetching, chode checks if the response from the API is not okay ( status code other than 200 )
  if (!apiRes.ok) {
    // if response is not okay, throws an error with a specific message indicating that the fetch dind not succed
    throw new Error(`details/${id} fetch not ok`);
  }

  // parsing Resoponse
  // if the response is ok, code parses the response body using json method
  // returns a pronise that resolves to the pased JSON data
  // JSON data respressents the detailed info about hte pet w/ specified ID
  return apiRes.json();

  // retunrs prsed JSON data
  // contains detailed info about the pet
};

export default fetchPet;

/*
    defines an asyncrhonous function 
    fetches detailed info about a pet based on ID using React Queyr library
    
    Constructs API URL based on the provided pet ID
    fetches data
    returns the detailed info about the pet
    if theres an issue w/ API response
    throws an error
*/
