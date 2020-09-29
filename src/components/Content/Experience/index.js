import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>تجربیات</h3>
            </Row>

            <>
                <Row>
                    <h4 className="Year">1397 - 1399</h4>
                    <h4 className="Title">تدریس زبان انگلیسی</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">مدرس کلاس خصوصی و عمومی</h5>
                </Row>
                <Row>
                    <p>
                        دارای مدرک تدریس زبان انگلیسی (TTC) و سابقه ۲ سال تدریس در آموزشگاه زبان‌
                        خارجه ممتاز
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1398</h4>
                    <h4 className="Title">انجمن علمی داشنجویی دانشگاه آزاد اسلامی</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">
                        تدریسیار و عضوی از انجمن علمی دانشجویی رشته مهندسی کامپیوتر
                    </h5>
                </Row>
                <Row>
                    <p>تدریسیار درس مبانی کامپیوتر (استاد اسماعیلی)</p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1396 - 1397</h4>
                    <h4 className="Title">آموزشگاه زبان ممتاز</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">مدیر امور‌داخلی و منشی </h5>
                </Row>
                <Row>
                    <p>
                        کسب تجربه مدیریت امور کلاس‌‌ها، مدیریت امورمالی آموزشگاه، هماهنگی و مدیریت
                        کادرآموزشی و پیگیری روابط و امور خارجی آموزشگاه.
                    </p>
                </Row>
            </>
        </div>
    );
};
