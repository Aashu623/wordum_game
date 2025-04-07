import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="/Logo/Logo.svg" alt="Example Image" className="logo" />

      <nav className="nav">
        <Link className="nav-link" href="/">
          HOME
        </Link>
        <Link className="nav-link" href="/game-info">
          GAME INFO
        </Link>
        <Link className="nav-link" href="/about">
          ABOUT
        </Link>
      </nav>
    </header>
  );
}
