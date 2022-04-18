import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className='text-link'>MOOD LOG✨</Link>
    </div>
  );
}
