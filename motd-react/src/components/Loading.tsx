import { useState } from "react";
import { Link } from "react-router-dom";

export default function Loading() {
  const [change, setChange] = useState(false);

  const timer = setTimeout(() => {
    setChange(true);
    clearTimeout(timer);
  }, 3000);

  return (
    <div>
      <div hidden={change} className="loading">
        <h1>분석 중</h1>
        <img className="img loading" src="/images/load.gif" alt="loading.." />
      </div>
      <div hidden={!change}>
        <img className="img" src="/images/chart.gif" alt="complete" />
        <div className="button">
          <Link className="text-link" to="/output">
            결과보러가기!
          </Link>
        </div>
      </div>
    </div>
  );
}
