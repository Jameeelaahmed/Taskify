import React, { useState } from "react";
import styles from "./LeaderBoard.module.scss";
import TeamTable from "./components/TeamTable";
import RankCard from "./components/RankCard";
import Podium from "./components/RankCard";

export default function LeaderBoard() {
  const [totalScore, setTotalScore] = useState(0);

  const calculateTotalScore = (score) => {
    setTotalScore(score);
  };
  return (
    <>
      <div className="leaderboard-container">
        <div className={styles.header}>
          <h1>Leader Board</h1>
          <p>Check out the top teams and their scores!</p>
        </div>
        <div
          className={`${styles.tableContainer}
          ${styles.rankCardContainer}
        `}
        >
          <Podium />
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderInfo}>
            <h3 style={{ textAlign: "center" }}>team 1</h3>
            <span>Total score: {totalScore}</span>
          </div>

          <TeamTable calculateTotalScore={calculateTotalScore} />
        </div>
      </div>
    </>
  );
}
