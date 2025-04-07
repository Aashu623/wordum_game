"use client";
import { FaLightbulb, FaVolumeUp, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { BsBrightnessHighFill } from "react-icons/bs";
import "../styles/gameboard.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GameBoard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  console.log(searchParams.get("level"));
  const Keyboard = [
    ["A", "W", "G", "R", "R", "S", "V"],
    ["D", "L", "B", "N", "D", "G", "I"],
    ["S", "F", "A", "F", "V", "S"],
  ];

  useEffect(() => {
    if (!level) {
      router.push("/game");
    }
  }, [level]);
  return (
    <div className="gameboard-container">
      <div className="top-bar">
        <div className="left-icons">
          <IoIosArrowBack
            className="game-icon"
            style={{ cursor: "pointer", color: "#000" }}
          />
          <FaArrowRotateLeft
            className="game-icon"
            style={{ cursor: "pointer", color: "#000" }}
          />
          <span className="level-button">EASY</span>
        </div>
        <div className="hints-container">
          <div className="icons-group">
            <FaLightbulb />
            <FaLightbulb />
            <FaLightbulb />
          </div>
          <span className="attempts">3/3 attempts</span>
        </div>
        <div className="right-icons">
          <FaVolumeUp style={{ cursor: "pointer", color: "#000" }} />
          <BsBrightnessHighFill style={{ cursor: "pointer", color: "#000" }} />
          <div className="coin">218</div>
        </div>
      </div>

      {/*Circle Grid*/}
      <div className="circle-grid">
        {Array.from({ length: 4 }).map((_, rowIdx) => (
          <div className="circle-row" key={rowIdx}>
            {Array.from({ length: 5 }).map((_, colIdx) => (
              <div className="circle" key={colIdx}></div>
            ))}
          </div>
        ))}
      </div>

      {/* Keyboard */}
      <div className="keyboard">
        {Keyboard.map((row, rowIndex) => (
          <div className="key-row" key={rowIndex}>
            {row.map((char, index) => (
              <button className="key" key={index}>
                {char}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}