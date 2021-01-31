import React from "react";
import "./styles.css";
import { Descriptions, Row } from "antd";
export default () => {
    return (
        <div className="Awards">
            <Row>
                <Descriptions title="Awards" column={1}>
                    <Descriptions.Item label="1397">
                        <b>
                        Certificat of Teachers Training Course<small> (TTC)</small>
                        </b>
                    </Descriptions.Item>
                    <Descriptions.Item label="1397">
                        <b>Certificat of Translation</b>
                    </Descriptions.Item>
                    <Descriptions.Item label="1393">
                        <b>Certificat of Completion C2</b>
                    </Descriptions.Item>
                </Descriptions>
            </Row>
        </div>
    );
};
