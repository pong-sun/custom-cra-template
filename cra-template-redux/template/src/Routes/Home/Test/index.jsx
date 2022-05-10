import React from "react";
import Counter from "../../../Components/Counter";
import * as Component from "../../../Components";
import "./main.css";
import "../../../Assets/Styles/index.css";
import Image from "../../../Assets/Images/impaulintech-vr.png";

export default function Main() {
  return (
    <>
      <div className="main-body">
        <Component.Header />
        <div className="container">
          <div className="left-column">
            <img src={Image} alt="impaulintect-vr" />
          </div>
          <div className="right-column">
            <h1>
              Hi
              <br />
              ImPaulinTech
              <br />
              and I tell computers what to do.
            </h1>
            <p>
              Welcome to my modern{" "}
              <strong style={{ opacity: 0.69 }}>react-redux</strong> custom
              CRA-Template running at...
              <br />
              &gt;&nbsp;
              <strong style={{ opacity: 0.9 }}>{window.location.host}</strong>
            </p>
            <Counter />
            <p>
              This is a customized{" "}
              <strong style={{ opacity: 0.69 }}>"create-react-app"</strong>{" "}
              template with redux. I prepare and modified the folder structure
              to make file handling more manageable and to save time when
              setting it up for a new project.
            </p>
            <div>
              <p>Checkout more of my custom templates.</p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech"
                  target="_new"
                >
                  npx create-react-app --template impaulintech
                </a>
              </p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech-redux"
                  target="_new"
                >
                  npx create-react-app --template impaulintech-redux
                </a>
              </p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech-useContext"
                  target="_new"
                >
                  npx create-react-app --template impaulintech-useContext
                </a>
              </p>
            </div>
          </div>
        </div>
        <Component.Footer />
      </div>
    </>
  );
}