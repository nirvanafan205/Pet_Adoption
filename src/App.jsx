//******Import Statements*******
import { createRoot } from "react-dom/client"; // rool-lvl rendering
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"; // components and utilities for client-side routing
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // managing data fetching/caching with React Query
import { useState } from "react"; //manages local state
import AdoptedPetContext from "./AdoptedPetContext"; // provides info about adopted pets
import Details from "./Details";
import SearchParams from "./SearchParams";

// sets some default options for queries
// i.e staleTime, cacheTime, Infinity
// data fetched will never be considered stale
// will be cached indefinitely
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

/*:
    adoptedPet state is declared using useState hook that's initialized w/ 'null'
    this state will represent info about adopted pet

    BrowserRouter is used to provide routing functionality for the app

    AdoptedPetContext.Provider wrates the entier content of the app
    provides adoptedPet state as the value to the context
    makes adoptedPet available to any consumer components part of the same context

    QueryClientProvider is rendered with a link to the root path

    Routes defines the routes for different components to be rendered

    Route is used to define what component should render when a specific path is matched
*/
const App = () => {
  // makes adoptedPet available to any consumer of adoptedPet context
  // Details has it availbele and so does SearchParams
  // whole hook is gonna be passed
  const adoptedPet = useState(null);
  return (
    <div>
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

// finds an HTML elment with the id "root"
const container = document.getElementById("root");

// createRoot create a new root for rendering
const root = createRoot(container);

// render method of the root is called with the 'App' component as its argument
// renders the entier application
root.render(<App />);

/*
    sets up a React application with routing and data fetching capabilities 
    using React Router and React Query
*/
