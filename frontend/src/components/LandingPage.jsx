import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

import headerSlogan from "../assets/imgs/landing-slogan.svg";
import headerImg from "../assets/imgs/landing-header-img.svg";
import headerIcon1 from "../assets/icons/header-icon-solid-1.svg";
import headerIcon2 from "../assets/icons/header-icon-solid-2.svg";
import headerIcon3 from "../assets/icons/header-icon-solid-3.svg";
import headerIcon4 from "../assets/icons/header-icon-solid-4.svg";
import angleRight from "../assets/icons/angle-right-solid.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const LandingPage = () => {
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
              <button className="header__button">Đặt lịch ngay</button>
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

      <div className="emergency-call">
        <img className="emergency-call__icon" src={emergencyCall} alt="" />
        <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
      </div>
    </div>
  );
};

export default LandingPage;
