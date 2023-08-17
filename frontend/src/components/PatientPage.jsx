import React, { useEffect } from "react";

const PatientPage = () => {
  useEffect(() => {
    document.title = "confidental - Thông tin cá nhân";
    return () => {
      document.title = "confidental - Đồng hành cùng nụ cười tự tin";
    };
  }, []);

  return <div className="PatientPage">Patient Page</div>;
};

export default PatientPage;
