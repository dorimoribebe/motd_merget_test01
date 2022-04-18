import { Link } from "react-router-dom";
import Social from "./Social";

export default function Home() {
  return (
    <div className="home">
      <h1>How Do I Look?</h1>
      <h3>
        ai 하두알룩에게,
        <br />
        당신의 데일리룩 무드분석을 요청해보세요!
      </h3>
      <img
        className="ai-img"
        src="https://cdn-icons-png.flaticon.com/512/6604/6604268.png"
        alt="ai HADOALOOK"
      />
      <div className="text">현재 -명이 참여했어요</div>
      <Social />

      <div className="button">
        <Link to="/upload" className="text-link">
          분석 요청하기🤖
        </Link>
      </div>
    </div>
  );
}
