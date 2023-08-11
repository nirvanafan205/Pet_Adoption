// react library
// imports createContext function
// creates a new context object
import { createContext } from "react";

// createContext function is invoked
// used to share data related to adopted pet
const AdoptedPetContext = createContext();

// exports context objects to be used in other parts of the application
export default AdoptedPetContext;

/*
    this code sets up a context object named "AdoptedPetContext" 
    using the 'createContext' library from React Library
    context is used to share data across components in this 
    React application which specifies data related to adopted pets
*/
