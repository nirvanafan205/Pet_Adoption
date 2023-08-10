import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = { hasError: false };

  // every time there's an error
  // function is called
  // this will set the new state to be hasError: true
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // life cycle method
  componentDidCatch(error, info) {
    // log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    // if no error, pass it through
    return this.props.children;
  }
}

export default ErrorBoundry;
