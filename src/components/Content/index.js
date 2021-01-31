import { Col, Row } from "antd";
import React from "react";
import "./styles.css";
import Skills from "./Skills/";
import Education from "./Education/";
import Social from "./Social/";
import Awards from "./Awards/";
import Experience from "./Experience/";

export default () => {
    return (
        <div className="Content">
            <Row className="about">
                <div>
                    <Row>
                        <h2>about</h2>
                    </Row>
                    <Row>
                        <p>
                            Computer Engineering student, who loves backend programing challanges and a passionate teacher
                        </p>
                    </Row>
                </div>
            </Row>
            <Row className="contents">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 9, order: 1 }} className="right">
                    <Row className="skills">
                        <Skills />
                    </Row>
                    <Row className="education">
                        <Education />
                    </Row>
                    <Row className="awards">
                        <Awards />
                    </Row>
                    <Row className="social">
                        <Social />
                    </Row>
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 15, order: 2 }} className="left">
                    <Experience />
                </Col>
            </Row>
        </div>
    );
};
