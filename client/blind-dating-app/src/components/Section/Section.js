import React from "react";
import IMG1 from "../../eventImages/IMG1.jpeg";
import IMG2 from "../../eventImages/IMG2.jpeg";
import IMG3 from "../../eventImages/IMG3.jpeg";
import IMG4 from "../../eventImages/IMG4.jpeg";
import IMG5 from "../../eventImages/IMG5.jpeg";

import "./Section.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dinner date with Live Music",
    date: "Sunday, 5th March",
    description:
      "Picture this: a cozy restaurant with warm lighting and a relaxed atmosphere. As you walk in, the sounds of live music fill the air, setting the mood for a perfect evening. Join your blind date in Mumbai and get to know each other as you and your date share a laugh as you tap your feet to the beat.",
    flexDirection: "row",
  },

  {
    id: 2,
    image: IMG2,
    title: "Art Gallery Date",
    date: "Wednesday, 8th March",
    description:
      "A serene atmosphere, dimly lit rooms, and captivating art. You walk hand in hand, admiring each piece, discussing its meaning and interpretation. A date in the art gallery is a cultural experience that stimulates the mind and senses, creating an atmosphere of intimacy and thought-provoking conversation.",
    flexDirection: "row-reverse",
  },
  {
    id: 3,
    image: IMG3,
    title: "Speed Date Sundays at a Cafe",
    date: "Sunday, 12th March",
    description:
      "In a bustling cafe, you meet a series of potential matches, each conversation lasting just a few minutes. The bell rings, signaling a switch, and you move on to the next. A speed date at the cafe is a fun and fast-paced way to meet new people.",
    flexDirection: "row",
  },
  {
    id: 4,
    image: IMG4,
    title: "Trivia and Game Night",
    date: "Friday, 17th March",
    description:
      "Surrounded by fellow competitors, you and your date team up to take on the challenges of trivia and board games. The lively atmosphere and competitive energy create a thrilling experience. A public trivia and game night date is a fun and interactive way to meet new people and make memories.",
    flexDirection: "row-reverse",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dance date",
    date: "Thursday, 23rd March",
    description:
      "You meet your date at the dance studio. With guidance, you learn the steps and begin to move in sync, creating a bond through shared experience. The fun and lighthearted atmosphere make for a memorable first date. A dance date is a chance to break the ice and let loose.",
    flexDirection: "row",
  },
];

const section = () => {
  return (
    <div>
      {data.map(({ id, image, title, date, description, flexDirection }) => {
        return (
          <div key={id} className="section" style={{ flexDirection }}>
            <div className="left-container">
              <div className="block1">
                <img src={image} />
              </div>
            </div>
            <div className="right-container block">
              <div className="sec-container">
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLPurD2X4FU8Mo3LJNUj_Qmy5HBwiu_Cviw3Vp9LZyKGeJcw/viewform">
                  <button>Book Now</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default section;
