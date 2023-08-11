import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Introduction from "./Introduction";

import headerSlogan from "../assets/imgs/landing-slogan.svg";
import headerImg from "../assets/imgs/landing-header-img.svg";
import headerIcon1 from "../assets/icons/header-icon-solid-1.svg";
import headerIcon2 from "../assets/icons/header-icon-solid-2.svg";
import headerIcon3 from "../assets/icons/header-icon-solid-3.svg";
import headerIcon4 from "../assets/icons/header-icon-solid-4.svg";
import angleRight from "../assets/icons/angle-right-solid.svg";
import bookingContent from "../assets/imgs/landing-maa-content.svg";
import lazyFooter from "../assets/imgs/footer.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const LandingPage = () => {
  const [currentType, setCurrentType] = useState("intro"); //intro, gallery, news

  const handleBooking = () => {

  };

  return (
    <div className="LandingPage">
      {/* Header */}
      <div className="Header">
        {/* Navigation Bar */}
        <NavigationBar currentPage="landing" />

        {/* Header Content */}
        <div className="section header__main">
          <div className="grid wide header__wrap">
            <div className="header__content">
              <img className="header__slogan" src={headerSlogan} alt="" />
              <p className="header__description">
                Hãy để các nha sĩ cùng những dịch vụ tốt nhất chăm sóc cho sức
                khoẻ răng miệng của bạn
              </p>
              <a href="#Booking" className="header__button">Đặt lịch ngay</a>
            </div>
            <img className="header__img" src={headerImg} alt="" />
          </div>
          <ul className="grid wide header__features">
            <li className="header__feature-item">
              <img src={headerIcon1} alt="" className="header__feature-icon" />
              <b className="header__feature-text">Hệ thống trực tuyến</b>
              <p className="header__feature-text">
                Phòng khám luôn có hệ sinh thái trực tuyến
              </p>
              <a href="/" className="header__feature-link">
                Tìm hiểu thêm
                <img src={angleRight} alt="" />
              </a>
            </li>
            <li className="header__feature-item">
              <img src={headerIcon2} alt="" className="header__feature-icon" />
              <b className="header__feature-text">Hoạt động 24/7</b>
              <p className="header__feature-text">
                Sẵn sàng tiếp nhận đặt lịch 24 tiếng một ngày
              </p>
              <a href="/" className="header__feature-link">
                Tìm hiểu thêm
                <img src={angleRight} alt="" />
              </a>
            </li>
            <li className="header__feature-item">
              <img src={headerIcon3} alt="" className="header__feature-icon" />
              <b className="header__feature-text">Dễ dàng truy cập</b>
              <p className="header__feature-text">
                Giao diện thân thiện cho khách hàng sử dụng
              </p>
              <a href="/" className="header__feature-link">
                Tìm hiểu thêm
                <img src={angleRight} alt="" />
              </a>
            </li>
            <li className="header__feature-item">
              <img src={headerIcon4} alt="" className="header__feature-icon" />
              <b className="header__feature-text">Cơ sở hiện đại</b>
              <p className="header__feature-text">
                Cơ sở vật chất đầy đủ cùng công nghệ hiện đại
              </p>
              <a href="/" className="header__feature-link">
                Tìm hiểu thêm
                <img src={angleRight} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Introduction */}
      <div className="Introduction">
        <div className="section introduction__main">
          <div className="grid wide introduction__wrap">
            <Introduction currentType={currentType} />
            <div className="introduction__sider">
              <p className="introduction__description">
                Mục tiêu dài hạn của <br />
                chúng tôi là luôn đạt được những kết quả tốt nhất cho sức khỏe
                răng miệng của bạn. Bên cạnh đó, chúng tôi cũng tập trung vào
                việc cung cấp cho bạn dịch vụ khách hàng tốt nhất.
              </p>
              <p className="introduction__description">
                Chúng tôi luôn cố gắng để phòng khám nha khoa này trở thành nơi
                mà khách hàng tin tưởng nhất!
              </p>
              <ul className="introduction__selection">
                <li
                  onClick={() => {
                    setCurrentType("intro");
                  }}
                  className={
                    currentType === "intro"
                      ? "introduction__selection-item introduction__selection-item--selected"
                      : "introduction__selection-item"
                  }
                >
                  Giới thiệu
                </li>
                <li
                  onClick={() => {
                    setCurrentType("gallery");
                  }}
                  className={
                    currentType === "gallery"
                      ? "introduction__selection-item introduction__selection-item--selected"
                      : "introduction__selection-item"
                  }
                >
                  Thư viện ảnh
                </li>
                <li
                  onClick={() => {
                    setCurrentType("news");
                  }}
                  className={
                    currentType === "news"
                      ? "introduction__selection-item introduction__selection-item--selected"
                      : "introduction__selection-item"
                  }
                >
                  Tin tức nha khoa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Make an Appointment */}
      <div className="Booking" id="Booking">
        <div className="section booking__main">
            <div className="grid wide booking__wrap">
                <img src={bookingContent} alt="" className="booking__content"/>
                <form className="make-an-appointment" onSubmit={handleBooking}>

                </form>
            </div>
        </div>
      </div>

      {/* Reviews */}

      {/* Footer */}
      <img src={lazyFooter} alt="Footer" className="Footer"/>

      {/* Emergency Call */}
      <div className="emergency-call">
        <img className="emergency-call__icon" src={emergencyCall} alt="" />
        <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
      </div>
    </div>
  );
};

export default LandingPage;
