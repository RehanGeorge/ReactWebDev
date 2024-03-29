import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";
import Card from "./components/Card";

const cardDetails = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    alt: "avatar_img",
    phone: "+123 456 789",
    email: "p@beyonce.com",
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    alt: "avatar_img",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    alt: "avatar_img",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];

console.log(cardDetails[0].name);

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <CardList cardDetails={cardDetails} />
  </div>,
  document.getElementById("root")
);
