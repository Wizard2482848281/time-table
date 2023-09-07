import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
var a = (
  <>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </>
);
//<div className="break"></div>
class TimeTable {
  Table() {
    return (
      <ul>
        <li>
          <span className="empty-box"></span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </li>
        <li>
          <span className="times"></span>
          <div>
            <div>{a}</div>
            <div className="break"></div>
          </div>
        </li>
        <li>
          <span className="times"></span>
          <div>{a}</div>
        </li>
        <li>
          <span className="times"></span>
          <div>{a}</div>
        </li>
        <li>
          <span className="times"></span>
          <div>{a}</div>
        </li>
        <li>
          <span className="times"></span>
          <div>{a}</div>
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
root.render([time.StudentTimeTable(), time.TeacherTimeTable()]);
