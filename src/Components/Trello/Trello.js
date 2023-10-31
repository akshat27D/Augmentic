import React from "react";
import "./Trello.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card/Card";
function Trello() {
  return (
    <div className="trello center">
      <div className="cont">
        <div className="top">
          <div className="same">TRELLO 101</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>
            A productivity powerhouse
          </div>
          <div className="same">
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            done. Learn more in our guide for getting started.
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <Card
              title={`Boards`}
              desc={`Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”"`}
            />
            <Card
              title={`Lists`}
              desc={`The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.`}
            />
            <Card
              title={`Cards`}
              desc={`Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.`}
            />
          </div>
          <div className="right">
            <div className="image">
              {/* <img src="https://picsum.photos/750/540" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trello;
