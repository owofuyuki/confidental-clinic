import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupValidation } from "./Validation";
import axios from "axios";

import logoHeading from "../assets/icons/confidental-logo.svg";
import logoBackground from "../assets/icons/confidental-mono.svg";
import arrowRight from "../assets/icons/arrow-right-solid.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const SignupPage = () => {
  useEffect(() => {
    document.title = "confidental - Đăng ký";
    return () => {
      document.title = "confidental - Đồng hành cùng nụ cười tự tin";
    };
  }, []);

  const [accountSignup, setAccountSignup] = useState({
    info: "",
    phone: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const showIllegal = () => {
    alert("Chỉ có bệnh nhân mới có thể đăng ký tài khoản mới!");
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(SignupValidation(accountSignup));
    // if (errors.info === "" && errors.phone === "" && errors.username === "" && errors.password === "") {
    //   axios.post("http://localhost:7417/signup", accountSignup)
    //        .then(res => {
    //         if (res.data.Status === "Success") {
    //           navigate("/");
    //         } else {
    //           alert("Error");
    //         }
    //        })
    //        .then(err => console.log(err));
    // }
  };

  return (
    <div className="SignupPage">
      <img
        className="signup__background-logo"
        src={logoBackground}
        alt=""
      ></img>
      <div className="signup__main">
        <div className="signup__heading">
          <img className="signup__heading-logo" src={logoHeading} alt=""></img>
          <div className="signup__selection">
            <p style={{ fontSize: "1.6rem" }}>Bạn là...</p>
            <ul className="signup__selection-menu">
              <li className="signup__selection-item signup__selection-item--selected">
                Bệnh nhân
              </li>
              <li onClick={showIllegal} className="signup__selection-item">
                Nha sĩ
              </li>
              <li onClick={showIllegal} className="signup__selection-item">
                Nhân viên
              </li>
            </ul>
          </div>
        </div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <h1 className="signup__title">Đăng ký</h1>
          <div className="signup__input">
            <label htmlFor="info">Họ và tên</label>
            <input
              value={accountSignup.info}
              onChange={(e) =>
                setAccountSignup({ ...accountSignup, info: e.target.value })
              }
              type="text"
              placeholder=""
              id="info"
              name="info"
            />
            {errors.info && (
              <span className="login__validation--error">{errors.info}</span>
            )}
          </div>
          <div className="signup__input">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              value={accountSignup.phone}
              onChange={(e) =>
                setAccountSignup({ ...accountSignup, phone: e.target.value })
              }
              type="tel"
              placeholder=""
              id="phoneNumber"
              name="phoneNumber"
            />
            {errors.phone && (
              <span className="login__validation--error">{errors.phone}</span>
            )}
          </div>
          <div className="signup__input">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              value={accountSignup.username}
              onChange={(e) =>
                setAccountSignup({ ...accountSignup, username: e.target.value })
              }
              type="text"
              placeholder=""
              id="username"
              name="username"
            />
            {errors.username && (
              <span className="login__validation--error">
                {errors.username}
              </span>
            )}
          </div>
          <div className="signup__input">
            <label htmlFor="password">Mật khẩu</label>
            <input
              value={accountSignup.password}
              onChange={(e) =>
                setAccountSignup({ ...accountSignup, password: e.target.value })
              }
              type="password"
              placeholder=""
              id="password"
              name="password"
            />
            {errors.password && (
              <span className="login__validation--error">
                {errors.password}
              </span>
            )}
          </div>
          <p className="signup__text">
            Bạn đã có tài khoản?
            <Link className="signup__link" to="/">
              Đăng nhập
            </Link>
          </p>
          <button className="signup__button" type="submit">
            <img className="signup__button-img" src={arrowRight} alt="Signup" />
          </button>
        </form>
        <div className="emergency-call login-signup-emergency-call">
          <img className="emergency-call__icon" src={emergencyCall} alt="" />
          <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
