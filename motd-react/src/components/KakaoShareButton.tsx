import React, { useEffect } from "react";
declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY); 
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "ai 하두알룩이 분석하는 데일리룩 무드",
          description: "#mood #ootd",
          imageUrl: "https://mood-log.netlify.app/", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: "https://mood-log.netlify.app/",
            webUrl: "https://mood-log.netlify.app/",
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://mood-log.netlify.app/",
              webUrl: "https://mood-log.netlify.app/",
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: "https://mood-log.netlify.app/",
              webUrl: "https://mood-log.netlify.app/",
            },
          },
        ],
      });
    }
  };
  return (
    <div className="kakao-share-button">
      <button id="kakao-link-btn" className="share-btn">
        <img src="images/kakao-talk.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareButton;
