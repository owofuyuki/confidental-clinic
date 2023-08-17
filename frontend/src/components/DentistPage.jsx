import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import dentistHeader from "../assets/imgs/dentist-header-bg.svg";
import dentistImg1 from "../assets/imgs/dentist-img-1.png";
import dentistImg2 from "../assets/imgs/dentist-img-2.png";
import dentistImg3 from "../assets/imgs/dentist-img-3.png";
import dentistImg4 from "../assets/imgs/dentist-img-4.png";
import dentistImg5 from "../assets/imgs/dentist-img-5.png";
import dentistImg6 from "../assets/imgs/dentist-img-6.png";
import dentistImg7 from "../assets/imgs/dentist-img-7.png";
import dentistImg8 from "../assets/imgs/dentist-img-8.png";
import emergencyCall from "../assets/icons/emergency-call.svg";

const DentistPage = () => {
  useEffect(() => {
    document.title = "confidental - Đội ngũ nha sĩ";
    return () => {
      document.title = "confidental - Đồng hành cùng nụ cười tự tin";
    };
  }, []);

  return (
    <div className="DentistPage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="dentist" />

      {/* Dentist Page Content */}
      <div className="section dentist__main">
        <img src={dentistHeader} alt="" className="dentist__header" />
        <div className="grid wide dentist__list">
          <div className="dentist__list-row">
            <div className="dentist__list-item">
              <img src={dentistImg1} alt="" className="dentist__img" />
              <b className="dentist__name">Mercher Roderick, MD</b>
              <p className="dentist__expertise">Nha khoa tổng quát</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg2} alt="" className="dentist__img" />
              <b className="dentist__name">Éloi Fabien, PA-C</b>
              <p className="dentist__expertise">Cấy ghép răng</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg3} alt="" className="dentist__img" />
              <b className="dentist__name">Abelle Dupond, PA-C</b>
              <p className="dentist__expertise">Chỉnh hình răng miệng</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg4} alt="" className="dentist__img" />
              <b className="dentist__name">Justin Lee, MD</b>
              <p className="dentist__expertise">Nha khoa nhi</p>
            </div>
          </div>
          <div className="dentist__list-row">
            <div className="dentist__list-item">
              <img src={dentistImg5} alt="" className="dentist__img" />
              <b className="dentist__name">Austin Pope, MD</b>
              <p className="dentist__expertise">Nha khoa tổng quát</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg6} alt="" className="dentist__img" />
              <b className="dentist__name">Michelle Dunn, CRNP</b>
              <p className="dentist__expertise">Chữa bệnh răng miệng</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg7} alt="" className="dentist__img" />
              <b className="dentist__name">Diana Chang, MD</b>
              <p className="dentist__expertise">Nha khoa nhi</p>
            </div>
            <div className="dentist__list-item">
              <img src={dentistImg8} alt="" className="dentist__img" />
              <b className="dentist__name">Vanna Bellini, MD</b>
              <p className="dentist__expertise">Nha khoa khẩn cấp</p>
            </div>
          </div>
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

export default DentistPage;
