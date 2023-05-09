import React from "react";
import NavBarA from "../components/NavBarA";
import "./RankingA.css";
import { Row, Col, Container } from "react-bootstrap";
import Content from "../components/RankingAContent.js";

function RankingA () {
  return (
    <div>
      <NavBarA />
      <Container>
        <div className="containerTabA">
          <Row>
            <Col sm={12}>
              <Content />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RankingA;
