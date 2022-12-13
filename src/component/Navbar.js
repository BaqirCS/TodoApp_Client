import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light ps-2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Todos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">
            Create Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
