import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import emergencyCall from "../assets/icons/emergency-call.svg";

const DentistPage = () => {
  return (
    <div className="DentistPage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="dentist" />

      Dentist Page

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
