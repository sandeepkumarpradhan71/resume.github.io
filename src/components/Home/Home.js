import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sandeep Kumar Pradhan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://lh3.googleusercontent.com/pw/AIL4fc_BQCBpbq7_wIDetpDJeOFPHjHr-nD7MbXQ-aBMTQ8OISdasMDIKCyf-E9efNkPFx-w3A488ycGSoLtVvUxdC4KVlHBwix3pjNAEL8orcDZ4ua16D8pihLXDQ5EuUKHEaIcr5D67naZTE1PPSSfJKlbCds9pOZNLi3lJjSl-n3JjG3_1P3kwR0iXDxmQJC0YLRKXMv8Cv6T-_6jOqxbMbuxZ-sV5GhbsND--N-xkhx7pAvNp_36fjBvP240HEvlzIiaxj10O16doaCccl4d9ljpy64QPzkE8DuOU8vDwJHBfFD-j1vcSekyBvo3dl3wrDFg9Y8pTtwoQMRJxuNez35bwA8b0SKV3zKG4z48O5AwgEqLuUj_lKfmgGan9ogWzHp4Pzj_dADgXmsxP8jO2j93wBqgl58z1757ei9B12Bhc5d-F_5qf1jAy4rkBFyqpKDo4ZNye04Bpgi9-5GQdmz0Z9-Lp_hJvHZTfGR7bYcoRMv_9LBoUejAyuvbdEYTEOMXh9v819OT78I-j_9oaDwgMPiJTtFg-_S8Nbv2w4UIIzmPzLd1_pZOeMCY6evBUS2NQ_9uJUCFhueClQyOP-P31gHvCpetLo6PdXY9J_knOy50LM1dyFZ61eMFysPGIf5AN27gVaVy7bp1eOkuPOeJ-XGrK6wE_eC1M-2YtQlvfC4Y-oRSoH60I9Vm58HubYH1jZtOwdVn-2xU5q946GdGnCo3Xh056BqBqGjdvtk9yGcm7BlaWL9brFlXxZQCOLz2YAvEsNC4BxneRee9UwD4l8D8fH-Sls7klHq5xND1MQv3izai2rr7Ts0mlPOf-efMRbkWM-hCX6JaYx7rsp_ALj-L0laERgt-CJMly06-0Ed8QGeK1Q_Ruhuk5J87i65bJAkx6Zj8a7xW68PXxdM=w493-h657-s-no?authuser=0"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}


export default Home;
