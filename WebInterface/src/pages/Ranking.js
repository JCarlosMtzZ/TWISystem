import React from "react";
import "./Ranking.css";
import { Row, Col, Container} from "react-bootstrap";
import Content from "../components/RankingUContent.js";
import NavBarU from "../components/NavBarU";

function RankingA () {
  return (
    <div>
      <NavBarU />
      <Container>
        <div className="containerTab">
          <Row>
            <div>
              <Col sm={12}>
                <Content />
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RankingA;
