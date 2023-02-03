import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahmudul Hasan </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I am pursuing my Bachelors in Computer Science and Engineering from United International University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you have enough faith, victory will prevail"{" "}
          </p>
          <footer className="blockquote-footer">Mahmudul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
