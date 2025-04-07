"use client";
import { useRouter } from "next/navigation";
import "../styles/level-selection.css";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function LevelSelection() {
  const router = useRouter();
  const [level, setLevel] = useState("");

  return (
    <div className="popup-overlay">
      <nav className="mobile-nav">
        <FaRegUserCircle size={32} color="black" />
        <div>
          <IoSettingsOutline size={32} color="black" />
        </div>
      </nav>
      <div className="popup-content">
        <span className="close-icon" onClick={() => router.push("/")}>
          ×
        </span>
        <h2 className="popup-title">Choose your preferred level</h2>
        <button
          className={level === "easy" ? "selected-level" : ""}
          onClick={() => setLevel("easy")}
        >
          EASY
        </button>
        <button
          className={level === "medium" ? "selected-level" : ""}
          onClick={() => setLevel("medium")}
        >
          MEDIUM
        </button>
        <button
          className={level === "hard" ? "selected-level" : ""}
          onClick={() => setLevel("hard")}
        >
          HARD
        </button>
        <button
          className={level === "expert" ? "selected-level" : ""}
          onClick={() => setLevel("expert")}
        >
          EXPERT
        </button>
        <button
          className="start-button"
          disabled={!level}
          onClick={() => router.push(`/game/play?level=${level}`)}
        >
          START
        </button>
      </div>
    </div>
  );
}
