import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import serviceHeader from "../assets/imgs/service-header-img.svg";
import serviceItem1 from "../assets/imgs/service-item-img-1.svg";
import serviceItem2 from "../assets/imgs/service-item-img-2.svg";
import serviceItem3 from "../assets/imgs/service-item-img-3.svg";
import serviceItem4 from "../assets/imgs/service-item-img-4.svg";
import serviceItem5 from "../assets/imgs/service-item-img-5.svg";
import serviceItem6 from "../assets/imgs/service-item-img-6.svg";
import serviceItem7 from "../assets/imgs/service-item-img-7.svg";
import servicePriceHeader from "../assets/imgs/service-prices-bg.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const ServicePage = () => {
  useEffect(() => {
    document.title = "confidental - Danh sách dịch vụ";
    return () => {
      document.title = "confidental - Đồng hành cùng nụ cười tự tin";
    };
  }, []);

  return (
    <div className="ServicePage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="service" />

      {/* Service Page Content */}
      <div className="section service__main">
        <div className="grid wide service__wrap">
          <div className="service__row">
            <img src={serviceHeader} alt="" className="service__header" />
            <img src={serviceItem1} alt="" className="service__item" />
          </div>
          <div className="service__row">
            <img src={serviceItem2} alt="" className="service__item" />
            <img src={serviceItem3} alt="" className="service__item" />
            <img src={serviceItem4} alt="" className="service__item" />
          </div>
          <div className="service__row">
            <img src={serviceItem5} alt="" className="service__item" />
            <img src={serviceItem6} alt="" className="service__item" />
            <img src={serviceItem7} alt="" className="service__item" />
          </div>
        </div>
        <img
          src={servicePriceHeader}
          alt=""
          className="service__price-header"
        />
        <div className="grid wide service__price-wrap">

        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Emergency Call */}
      <div className="emergency-call">
        <img className="emergency-call__icon" src={emergencyCall} alt="" />
        <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
      </div>
    </div>
  );
};

export default ServicePage;
