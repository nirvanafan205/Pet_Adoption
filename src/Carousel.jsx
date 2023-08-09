import { Component } from "react";

/*
    classes must extend to a react component
    every class component must have a render function
    must return something
*/
class Carousel extends Component {
  state = {
    active: 0,
  };

  // default image
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // switches pics of the main
  // whatever the user clicks on, that'll become the main pic
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    // state is mutable
    // keeps track of internal state component
    const { active } = this.state;

    // how we get the images
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
