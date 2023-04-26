import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap-5.3.0-alpha3-dist/css/bootstrap.css";
import profileImg from "./images/profile_image.jpeg";
import tick from "./images/tick.png";

const ProfileImage = () => (
  <div>
    <img
      src={profileImg}
      alt="taiwoImg"
      width="150"
      height="150"
      className="rounded-circle float-start"
    />
  </div>
);

const Texts = ({ data: { name, jobTitle, skillTitle } }) => {
  return (
    <header>
      <div className="texts">
        <div className="" style={{ display: "flex" }}>
          <h3>{name}</h3>
          <div>
            <img
              src={tick}
              className="img-fluid pt-1 mx-2"
              alt="tick"
              width="30"
              height="30"
            />
          </div>
        </div>
        <p>{jobTitle}</p>
        <h4>{skillTitle}</h4>
      </div>
    </header>
  );
};

const SkillBadges = () => (
  <main>
    <div className="badges float-start mb-5">
      <span className="badge h3 p-2">HTML</span>
      <span className="badge mx-2 p-2">CSS</span>
      <span className="badge p-2">Sass</span>
      <span className="badge mx-2 p-2">JS</span>
      <span className="badge p-2">React</span>
      <span className="badge mx-2 p-2">Redux</span>
      <span className="badge p-2">Node</span>
      <span className="badge mx-2 p-2">MongoDB</span>
      <span className="badge p-2">Python </span>
      <span className="badge mx-2 p-2">Flask</span>
      <span className="badge p-2">Django</span>
      <span className="badge mx-2 p-2">NumPy</span>
      <span className="badge p-2">Pandas</span>
      <span className="badge mx-2 p-2 h3">Data Analysis</span>

      <br />

      <span className="badge p-2">MySQL</span>
      <span className="badge mx-2 p-2">GraphQL</span>
      <span className="badge p-2">D3.js</span>
      <span className="badge mx-2 p-2">Gatsby</span>
      <span className="badge p-2">Docker</span>
      <span className="badge mx-2 p-2">Heraku</span>
      <span className="badge p-2">Git</span>
    </div>
  </main>
);

const WorkPeriod = (props) => (
  <footer>
    <div>
      <p>&copy; {props.workPeriodText}</p>
    </div>
  </footer>
);

const JsxElement = () => {
  const data = {
    name: "Taiwo Tom-Ayegunle",
    jobTitle: "React Developer, Nigeria",
    skillTitle: "Skills",
  };
  const workPeriodText = "Joined on Aug 30, 2023";
  return (
    <div className="box1">
      <div className="box2">
        <ProfileImage />
        <Texts data={data} />
        <SkillBadges />
        <WorkPeriod workPeriodText={workPeriodText} />
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<JsxElement />, rootElement);
