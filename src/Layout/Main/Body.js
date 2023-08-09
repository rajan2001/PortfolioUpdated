import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Body() {
  const [button, setbutton] = useState(0);
  const sideButton = ["GitHub", "Companies"];

  const sideButtonRender = sideButton.map((render, index) => (
    <button
      className={`side_button ${index === button ? "side_button-focus" : ""}`}
      key={index}
      onClick={(e) => {
        setbutton(index);
      }}
    >
      {render}
    </button>
  ));
  const data = [
    {
      heading: "Open Source",
      link: "@GitHub",
      href: "github.com/rajan2001",
      date: "February 2023 - Present",
      paragraph: [
        "Solving and having a collaboration with different team and learning from the open source and trying to contribute.",

        "Resolved multiple issues related to the JWT, Nginx.",

        "Collaborated with a team of students, learning functional programming in javascript, the state of state management in React,Learing Basics of DevOps and server side from the development phase to Production.",
      ],
    },

    {
      heading: "SDE Intern",
      link: "@Gepton",
      href: "gepton.com",
      date: "May 2023 - Present",
      paragraph: [
        "On a daily basis, collaborate with a multi-disciplinary team of engineers, designers, and product managers as part of the PostPe Core team to develop the newest consumer-focused product.",

        "Primarily responsible for adding new features to the React and SASS-based Web application.",

        "In addition, utilising JavaScript, and PostgreSQL, develop APIs for new dashboard capabilities & features for the user support staff.",
      ],
    },
  ];

  const featureCardComponent = ["React", "Typescript", "Prisma", "Netlify"];

  const featureCardComponentRender = featureCardComponent.map(
    (render, index) => (
      <p className="feature-pro-container-link" key={index}>
        {render}
      </p>
    )
  );

  const paragraphRender = data[button].paragraph.map((para, index) => (
    <li className="work_exp-paragraph-list" key={index}>
      {para}
    </li>
  ));
  return (
    <>
      <div className="body_main">
        <div className="body_main-child">
          <div className="body_main-lotti">
            <Player
              autoplay
              loop
              src={process.env.PUBLIC_URL + "src/animation.json"}
              style={{ height: "400px", width: "400px" }}
            ></Player>
          </div>
          <div className="body_main-heading">
            <h1 className="body-main-heading-h1">Hi, I'm Rajan Pandey</h1>
          </div>
          <div className="body_main-paragraph">
            A Software developer specialising in building performant
            applications
          </div>
        </div>
      </div>
      <div className="body_main-wrapper">
        <div className="body_main-container">
          <div className="body_main-workexp">
            <h3 className="body_main-work">
              Work
              <span className="body_main-experience">Experience</span>
            </h3>
            <div className="body_main-grow"></div>
          </div>

          <div style={{ height: "8rem" }}></div>

          <div className="Work_exp-container">
            <div className="side_link-buttons">{sideButtonRender}</div>
            <div className="work_exp-Deatils-container">
              <div className="work_exp-heading-container">
                <h3 className="work_exp-heading"> {data[button].heading} </h3>
                <a
                  className="Work_exp-link"
                  href={`https://${data[button].href}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data[button].link}
                </a>
              </div>
              <p className="work_exp-date">{data[button].date}</p>
              <ul className="work_exp-paragraph">{paragraphRender}</ul>
            </div>
          </div>
          <div style={{ height: "8rem" }}></div>

          <div className="body_main-workexp">
            <h3 className="body_main-work">
              Featured
              <span className="body_main-experience">Projects</span>
            </h3>
            <div className="body_main-grow"></div>
          </div>

          <div style={{ height: "8rem" }}></div>

          <div className="feature_pro-container">
            <div className="feature_pro-image-container">
              <img
                className="feature_pro-images"
                src={process.env.PUBLIC_URL + "src/siginit.webp"}
                alt="container-images"
              ></img>
            </div>
            <div className="feature_pro-details">
              <h1 className="feature_pro-heading">AOS</h1>
              <p className="feature_pro-paragraph">
                AOS aims to identify, encourage and promote students with a
                creative bent of mind towards the disciplines of Maths and
                Science and enjoy the challenges of mathematics and science in a
                spirit of friendly competitions
              </p>
              <div className="feature_pro-component">
                {featureCardComponentRender}
              </div>
              <div className="feature_pro-button-container">
                <button className="feature_pro-button">
                  <a
                    className="feature_pro-button-link"
                    href="https://aosociety.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    View Website
                  </a>
                </button>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="50px"
                    height="50px"
                    fill-rule="nonzero"
                  >
                    <g
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(4,4)">
                        <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
