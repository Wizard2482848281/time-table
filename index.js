import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Words } from "./App";
var words = new Words();
console.log(words);
function buttonsFunction() {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
}
//<div className="break"></div>
class TimeTable {
  constructor(buttons) {
    buttons = (
      <>
        <span>{words.Armenian()}</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </>
    );
  }

  Table() {
    return (
      <ul>
        <li>
          <span className="empty-box"></span>
          <span>Երկ</span>
          <span>Երք</span>
          <span>Չոր</span>
          <span>Հին</span>
          <span>ՈՒրբ</span>
        </li>
        <li>
          <span className="times">1-ին</span>
          <div>
            <div>{buttonsFunction()}</div>
            <div className="break"></div>
          </div>
        </li>
        <li>
          <span className="times">2-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">3-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">4-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">5-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">6-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">7-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
        <li>
          <span className="times">8-րդ</span>
          <div>{buttonsFunction()}</div>
        </li>
      </ul>
    );
  }
  StudentTimeTable() {
    return (
      <div>
        <this.Table></this.Table>
      </div>
    );
  }
  TeacherTimeTable() {
    return (
      <div>
        <this.Table></this.Table>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector("body"));
var time = new TimeTable();
console.log(time);
root.render([
  words.Armenian().at(2),
  words.Armenian().at(0),
  time.StudentTimeTable(),
  words.Armenian().at(1),
  time.TeacherTimeTable(),
]);
