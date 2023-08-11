import { Component } from "react";

/*
    classes must extend to a react component
    every class component must have a render function
    must return something
*/
// Carousel class is defined as a subclass
// inherits behaviors and methos from Component class provided by react
class Carousel extends Component {
  // keeps track of index of the currently active image
  state = {
    active: 0,
  };

  // default image of pets
  // placeholder image
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // ****Event Handler****
  // switches pics of the main
  // whatever the user clicks on, that'll become the main pic
  // updates active state property based on the index of the clicked image
  // retrieved from the 'data-index' attribute of the clicked element
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  // *****Render Method*****
  // contains the following
  //
  // current active state index is retrieved
  // images prop is retrieved
  // the main image of the carousel is displayed using the img tag w/ src attribute set to the image corresponding to active index
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
            // .map function is used to iterate over each image in the 'images' aray
            // img tag is rendered with src attribute
            // className is set to active if the index matches current active state index
            // otherwise it's an empty string
            // onClick event handler is attached to thumbnail img
            // calls handleIndexClick method when clicked
            // helps in updating active state w/ the index of the clicked thumbnail
            // data-index attribute is set to the index of the thumbnail img
            // used to determine which thumbnail was clicked

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

// ***** Export Statement *****
export default Carousel;
