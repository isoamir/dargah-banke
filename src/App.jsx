import img1 from "./assets/2.png";
import img3 from "./assets/Wallet_alt.png";
import img2 from "./assets/Web-design-Shaprak.png";
import img4 from "./assets/Desk_fill@2x.png";

import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const cardNumberRef = useRef(null);
  const cvvRef = useRef(null);
  const expiryDateRef = useRef(null);
  const securityCodeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  useEffect(() => {
    cardNumberRef.current.focus();
  }, []);

  const handleInput = (e, nextRef) => {
    if (e.target.value.length === e.target.maxLength) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="main">
      <div className="hedermain">
        <button className="langoyg" type="button">
          <h3 className="h3">English</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.5936 17.6577C16.5314 18.2177 16.4102 18.7695 16.232 19.304L16 20"
              stroke="#ffffff"
            />
            <path
              d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5"
              stroke="#ffffff"
            />
            <circle cx="12" cy="12" r="9" stroke="#ffffff" />
          </svg>
        </button>
      </div>
      <div className="foter">
        <div className="heder">
          <img className="img2" src={img2} alt="" />
          <h3 className="h3farsi">درگاه پرداخت الکترونیک سپ</h3>
          <img className="img1" src={img1} alt="" />
        </div>
        <div className="karbord">
          <div className="pardakht">
            <div className="div1">
              <h4 className="text1">اطلاعات کارت خود را وارد کنید</h4>
            </div>
            <form action="" className="form">
              <h4 className="text2">شماره کارت</h4>
              <input
                type="text"
                className="card"
                ref={cardNumberRef}
                onInput={(e) => handleInput(e, cvvRef)}
              />
              <img src={img3} alt="" className="img3" />

              <h4 className="text4">شماره شناسایی دوم</h4>
              <input
                type="text"
                className="card"
                ref={cvvRef}
                onInput={(e) => handleInput(e, expiryDateRef)}
              />
              <img src={img4} alt="" className="img4" />

              <h4 className="text5">تاریخ انقضا</h4>
              <div className="aaaa">
                <input
                  type="text"
                  className="card1"
                  placeholder="سال"
                  ref={expiryDateRef}
                  onInput={(e) => handleInput(e, securityCodeRef)}
                />
                <input
                  type="text"
                  className="card1"
                  placeholder="ماه"
                  ref={expiryDateRef}
                  onInput={(e) => handleInput(e, securityCodeRef)}
                />
              </div>

              <h4 className="text5">کد امنیتی</h4>
              <input
                type="text"
                className="card"
                placeholder="کد امنیتی"
                ref={securityCodeRef}
                onInput={(e) => handleInput(e, phoneNumberRef)}
              />

              <h4 className="text5">رمز دوم</h4>
              <div className="aa">
                <button className="aaa">درخواست رمز پویا</button>
                <input
                  type="text"
                  className="card1"
                  placeholder="رمز پویا"
                  ref={phoneNumberRef}
                />
              </div>

              <button type="submit" className="btn">
                پرداخت
              </button>
            </form>
          </div>

          <div className="traconesh">
            <div className="div2">
              <h4 className="text1"> :زمان باقی مانده </h4>
              <div className="pazerandh">
                <h4>پذیرنده</h4>
                <h2>حسین اسکندری</h2>
              </div>
              <div className="mablag">
                <h4>مبلغ</h4>
                <h2>
                  {" "}
                  <span>ریال</span> 14,600,000
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
