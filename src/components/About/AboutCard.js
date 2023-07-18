import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hope you are doing well! My name is
             <span className="purple"> Sandeep Kumar Pradhan </span> 
             and I am from
             <span className="purple"> Bangalore. </span>
             I am currently pursing my B-Tech Degree in 
             <span className="purple"> Computer science and engineering </span>
             at the 
             <span className="purple"> Dayananda Sagar University. </span>
             I have a huge passion for programming, especially <span className="purple">
              Full Stack development, Machine Learning and Software enginerring.
             </span>
            <br />
            <br />
            Currently, I am looking for <span className="purple">Internships.</span> at 
            I have done mini-projects on the courses like <span className="purple">Cloud Application Developement,Full Stack Development, Compiler Design and System Software,Operating System.</span> along with <span className="purple">Java, JavaScript, ExtJs, and 
            </span> to develop the required skills. 
            <br />
            <br />
            Also, I am Pursuing some certification courses on <span className="purple">Machine Learning and Web Development</span>.
            As a part of the B-Tech program <span className="purple"></span>,
            
            <br />
            <br />
            Some other activities I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to the Weeknd on repeat
            </li>
            <li className="about-activity">
              <ImPointRight /> cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "They gon' remember my legacy"{" "}
          </p>
          <footer className="blockquote-footer">Abel Tesfaye</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
