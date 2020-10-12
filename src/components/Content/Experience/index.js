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
                    <h4 className="Year">1399</h4>
                    <h4 className="Title">ربات تلگرام با استفاده از php</h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">mangadl_tbot@</h5>
                </Row>
                <Row>
                    <p>
                        رباتی برای کراولر زدن به سایت های مانگا و کامیک و استخراج عکس به عکس آنها و سپس تبدیل آن به PDF و ZIP 
                        <ul>
                            <li>استفاده از ساختار توسعه تست محور (TDD)</li>
                            <li>استفاده از ساختار MVC</li>
                            <li>استفاده از composer</li>
                            <li>استفاده از MySQL</li>
                            <li>استفاده از <a href="https://github.com/nikic/FastRoute">FastRoute</a></li>
                            <li>استفاده از <a href="https://github.com/Imagick/imagick">Imagick</a></li>
                            <li>استفاده از <a href="https://github.com/Ne-Lexa/php-zip">PhpZip</a></li>
                            <li>استفاده از <a href="https://phinx.org/">phinx</a></li>
                        </ul>
                        پروژه به دو نیم تقسیم شده ک عبارت است از :
                        <ul>
                            <li>بخش دانلودر که به صورت پکیج <a href="https://github.com/s-mtz/mangadl-crawlers">mangadl-crawlers</a> که جدا عرضه شده و قابل استفاده است </li>
                            <li>بخش هندلر ربات تلگرام <a href="https://github.com/s-mtz/mangadl_tbot">mangadl_tbot</a> </li>
                        </ul>
                    </p>
                </Row>
            </>

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
