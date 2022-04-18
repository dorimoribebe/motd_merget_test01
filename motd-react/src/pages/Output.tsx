import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Social from "../components/Social";

export default function Output() {
  const url: string = "http://localhost:3001/data";
  const data = useFetch(url);
  //const test = useFetch(url);
  //{test.map((test) => (
  //<div key={test.id}>{test.id}</div>
  //))}
  return (
    <div className="output">
      <h1>결과</h1>
      {data.map((data) => (
        <div key={data.id}>
          <img className="output-img" src={data.image} />
          <p>오늘 당신의 무드는 </p>
          <p>🕶 우주 최강 힙스터 무드 🕶</p>
          <p>
            {data.hip[0]}
            {data.hip[1]}%, {data.casual[0]}
            {data.casual[1]}%
          </p>
          설명~~
        </div>
      ))}
      <Social />
      <div className="button">
        <Link to="/" className="text-link">
          다시 테스트하기
        </Link>
      </div>
    </div>
  );
}
