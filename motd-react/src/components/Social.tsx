import React, { useEffect } from "react";
import Facebook from "./Facebook";
import KakaoShareButton from "./KakaoShareButton";
import Twitter from "./Twitter";
import LinkShare from "./LinkShare";

export default function Social() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="link-icon">
      {/*<a href="#">
        <img
          className="link-icon.instagram"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="instagram"
        />
  </a>*/}
      <div className="link-icon.twitter">
        <Twitter />
      </div>
      <div className="link-icon.facebook">
        <Facebook />
      </div>
      <div className="link-icon.kakao">
        <KakaoShareButton />
      </div>
      <div className="link-icon.link">
        <LinkShare />
      </div>
    </div>
  );
}
