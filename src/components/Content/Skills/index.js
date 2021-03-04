import { Row, Progress, Col, Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Skills">
            <Descriptions title="مهارت‌ها" column={1}>
                <h4>
                    <b>زبان‌ :</b>
                </h4>
                <Descriptions.Item label="English">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={90}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="Arabic">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={80}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="PHP">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={30}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
