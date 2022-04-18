import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <div>
      <h1>🚧잘못된 접근입니다.🚧</h1>
      <Link to="/" className="button text-link">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
