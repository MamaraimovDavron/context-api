import React, { Component } from "react";
import "./middle.css";

class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-left"></div>
        <div className="middle-right"></div>
        <div className="third-box">
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="230"
              viewBox="0 0 230 230"
              fill="none"
            >
              <g filter="url(#filter0_d_15_838)">
                <g clip-path="url(#clip0_15_838)">
                  <rect
                    x="65"
                    y="40"
                    width="100"
                    height="100"
                    rx="50"
                    fill="#E5E5E5"
                  />
                  <line
                    x1="66.3536"
                    y1="40.6464"
                    x2="165.354"
                    y2="139.646"
                    stroke="#0065FF"
                  />
                  <line
                    x1="65.6464"
                    y1="139.646"
                    x2="164.646"
                    y2="40.6465"
                    stroke="#0065FF"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_15_838"
                  x="0"
                  y="0"
                  width="2900"
                  height="230"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="25" />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_838"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_838"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_15_838">
                  <rect
                    x="65"
                    y="40"
                    width="100"
                    height="100"
                    rx="50"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <h1>Hello.</h1>

          <h1>
            My na<span className="white">me is Kevin</span>
          </h1>

          <p className="z-index">
            I'm a Digital Product and UI Designer – creating digital experiences
            that are intuitive for real people and making complex processes easy
            to use. Right now, I'm Design Lead at Holiday Extras, covering all
            our digital platforms across a whole load of brands – leading a
            great team across design, UI engineering, accessibility and customer
            experience. I'm lucky to be part of a great team of designers,
            writers, engineers, PMs and data specialists – amongst others –
            testing, iterating and optimising our platforms and products. I've
            got some work on Dribbble, some previous work at Saga and you can
            find me over on twitter and sometimes on Medium too. I also take too
            many photos.
          </p>
        </div>
      </div>
    );
  }
}

export default Middle;
