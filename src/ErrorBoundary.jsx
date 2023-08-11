import { Component } from "react";
import { Link } from "react-router-dom";

// component state
class ErrorBoundary extends Component {
  // state object is defined w/ property haseError
  // initailly sets to false,
  // state property keeps track of whether an error has occurred within the error boundary
  state = { hasError: false };

  // every time there's an error
  // function is called
  // this will set the new state to be hasError: true
  // called when an error is caught within a child component
  // recieves error object as an argument
  // method simply returns an updated state object with hasError set to true
  // sets the state property to indicate that an error has occurred
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // life cycle method
  // lifecycle method is defined within EorrorBoundary class
  // method is called when an error is caught within a child componenent
  componentDidCatch(error, info) {
    // log this to something like TrackJS or NewRelic
    // recieves two arguements
    //error ( the error object ) and info (additional information about the error )
    console.error("ErrorBoundary component caught an error", error, info);
    // includes a log statement to output the error and information about the error to the console
    // useful for debugging and error tracking purposes
  }

  // render method
  // defines what the component should render based on its state and props
  render() {
    // if hasError is true
    // a fallback UI is rendered
    // includes a message indication that there was an error witha listing and a link to the homepage
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    // if no error, pass it through
    // allows the comoponent to rend its children normally if no error has ocreed
    return this.props.children;
  }
}

export default ErrorBoundary;

/*
    defines a ErrorBoundary class compnent in React
    serves as a wrapper to catch errors occurring within its child components
    When an error is caught, it displays fallback UI with an error message
    and a link to the homepage
    No error allos it to render its child components
    prevents the entire application from crashing due to errors in specific components
*/
