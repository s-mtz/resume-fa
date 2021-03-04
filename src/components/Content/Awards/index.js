import React from "react";
import "./styles.css";
import { Descriptions, Row } from "antd";
export default () => {
    return (
        <div className="Awards">
            <Row>
                <Descriptions title="دستاوردها" column={1}>
                    <Descriptions.Item label="1397">
                        <b>
                            مدرک تدریس زبان انگلیسی <small>(TTC)</small>
                        </b>
                    </Descriptions.Item>
                    <Descriptions.Item label="1397">
                        <b>مدرک مترجمی زبان انگلیسی </b>
                    </Descriptions.Item>
                    <Descriptions.Item label="1393">
                        <b>مدرک پایان‌دوره زبان انگلیسی</b>
                    </Descriptions.Item>
                </Descriptions>
            </Row>
        </div>
    );
};
