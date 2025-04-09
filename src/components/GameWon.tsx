import Link from "next/link";
import { FaHome, FaRedo } from "react-icons/fa";
import "../styles/common.css";

const GameWon = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-box">
      <span className="close-icon" onClick={onClose}>
        ×
      </span>
      <h2 className="modal-title">YOU WIN</h2>
      <p className="modal-subtitle">
        You suceesfully found all four words
        <br />
        Coins earned
      </p>
      <div className="button-row">
        <Link href="/game">
          <button className="icon-button">
            <FaRedo />
          </button>
        </Link>
        <Link href="/">
          <button className="icon-button">
            <FaHome />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameWon;
