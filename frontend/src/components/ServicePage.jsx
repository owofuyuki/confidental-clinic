import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

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
