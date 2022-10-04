import React, { Component } from "react";
import Slider from "react-slick";
import "./TwoSliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "./Next.svg";
import Previous from "./Previous.svg";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={Next}
      alt=""
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "#ddd",
        backgroundImage: "URL(./Next.svg)",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "50%",
        marginRight: "100px",
        zIndex: "99",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={Previous}
      alt=""
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "#ddd",
        backgroundImage: "URL(./Next.svg)",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Data = [
  {
    id: 1,
    star: "5.0",
    text: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    id: 2,
    star: "4.0",
    text: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    id: 3,
    star: "3.0",
    text: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    id: 4,
    star: "2.0",
    text: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    id: 5,
    star: "1.0",
    text: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
];
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          style={{
            width: "50%",
            height: "345px",
            background: "red",
            padding: "0 200px",
          }}
        >
          {Data.map((item) => {
            return (
              <div key={item.id} id="cards">
                <p>{item.star}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          style={{
            width: "50%",
            background: "red",
          }}
        ></Slider>
      </div>
    );
  }
}
