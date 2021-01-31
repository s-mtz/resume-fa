import { Descriptions, Row } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Education">
            <Descriptions title="education" column={1} layout="vertical">
                <Descriptions.Item label="bachelor’s of Computer Engineering">
                    Islamic Azad University (since 2018)
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
