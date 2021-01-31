import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>Experience</h3>
            </Row>

            <>
                <Row>
                    <h4 className="Year">2020 - 2021</h4>
                    <h4 className="Title">Team Green Olive</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">Junior Backend Developer</h5>
                </Row>
                <Row>
                    <p>
                        an small organization for developing applications
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2020</h4>
                    <h4 className="Title">Telegram bot using php</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">mangadl_tbot@</h5>
                </Row>
                <Row>
                    <p>
                        a robot which crawls into comics and mangas websites and export the images as zip and pdf
                        <ul>
                            <li>using Test-driven development (TDD)</li>
                            <li>using Model, View, and Controller (MVC)</li>
                            <li>using از composer</li>
                            <li>using MySQL</li>
                            <li>using <a href="https://github.com/nikic/FastRoute">FastRoute</a></li>
                            <li>using <a href="https://github.com/Imagick/imagick">Imagick</a></li>
                            <li>using <a href="https://github.com/Ne-Lexa/php-zip">PhpZip</a></li>
                            <li>using <a href="https://phinx.org/">phinx</a></li>
                        </ul>
                        the project is divided into two parts such as:
                        <ul>
                            <li>the downloader package <a href="https://github.com/s-mtz/mangadl-crawlers">mangadl-crawlers</a> which can be used in any other project separately</li>
                            <li>the telegram bot handler <a href="https://github.com/s-mtz/mangadl_tbot">mangadl_tbot</a> </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2018 - 2020</h4>
                    <h4 className="Title">Teaching English</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">Teacher of public and private classes</h5>
                </Row>
                <Row>
                    <p>
                        with the license of Teachers Training Course(TTC) and 2 years of teaching experience in Momtaz institute
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2017 - 2018</h4>
                    <h4 className="Title">Momtaz institute</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">Secretary and the internal director</h5>
                </Row>
                <Row>
                    <p>
                        experiencing class management, financial management and staff management
                    </p>
                </Row>
            </>
        </div>
    );
};
