import React, { useState, useEffect } from "react";

function Test() {
  const [totalCoins, setTotalCoins] = useState(0.0);
  const [currentMining, setCurrentMining] = useState(0.0);
  const miningSpeed = 0.025;
  const engineBoost = 100;
  const maxMining = 0.05;
  const [lastClaimed, setLastClaimed] = useState(0.0);
  const claimCooldown = 10;
  const [claimTimer, setClaimTimer] = useState(claimCooldown);

  useEffect(() => {
    const effectiveMiningSpeedPerHour = miningSpeed / (1 - engineBoost / 100);
    const effectiveMiningSpeedPerSecond = effectiveMiningSpeedPerHour / 3600;

    const miningInterval = setInterval(() => {
      if (currentMining < maxMining) {
        setCurrentMining((prevMining) => {
          const newMining = prevMining + effectiveMiningSpeedPerSecond;
          return newMining > maxMining ? maxMining : newMining;
        });
      }

      if (claimTimer > 0) {
        setClaimTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(miningInterval);
  }, [currentMining, claimTimer, miningSpeed, engineBoost, maxMining]);

  const claimCoins = () => {
    if (claimTimer > 0) {
      alert("Please wait for another 10 minutes.");
      return;
    }

    setTotalCoins((prevTotal) => prevTotal + currentMining);
    setLastClaimed(currentMining.toFixed(3));
    setCurrentMining(0);
    setClaimTimer(claimCooldown);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="content active">
      <h1 id="totalCoins" className="page_welcome_reward_number">
        {totalCoins.toFixed(6)}
      </h1>
      <span id="lastClaimed" className="last_claimed_number">
        {lastClaimed}
      </span>{" "}
      GDM
      <div className="miner_top">
        <div className="miner_top_icon_event">
          <button className="miner_icon_ctn">
            <img
              src="./images/event.png"
              alt="event_icon"
              className="miner_icon"
            />
          </button>
          <p className="miner_icon_text">Event</p>
        </div>
        <div className="icon_miner_group">
          <div className="miner_top_icon_daily">
            <button className="miner_icon_ctn">
              <img
                src="./images/daily.png"
                alt="daily_icon"
                className="miner_icon"
              />
            </button>
            <p className="miner_icon_text">Daily</p>
          </div>
          <div className="miner_top_icon_rank">
            <button className="miner_icon_ctn">
              <img
                src="./images/ranking.png"
                alt="rank_icon"
                className="miner_icon"
              />
            </button>
            <p className="miner_icon_text">Rank</p>
          </div>
        </div>
      </div>
      <div className="miner_mid_container">
        <div className="miner_mid_ctn">
          <div className="miner_text_ctn">
            <p className="miner_text">Minner</p>
            <p className="miner_current_mining" id="currentMining">
              {currentMining.toFixed(6)}
            </p>
          </div>
          <div className="mining_truck_img_ctn">
            <img
              src="./images/truck.png"
              alt="mining_truck"
              className="mining_truck_img"
            />
          </div>
          <div className="miner_mid">
            <div className="miner_mid_item">
              <p className="miner_mid_text text_uppercase">speed:</p>
              <p className="miner_mid_text text_uppercase">
                <span id="miningSpeed" className="miner_mid_number">
                  {miningSpeed}
                </span>
                /hour
              </p>
            </div>
            <div className="miner_mid_item">
              <p className="miner_mid_text text_uppercase">engine:</p>
              <p className="miner_mid_number">
                +
                <span id="engineBoost" className="miner_mid_number">
                  {engineBoost}
                </span>
                %
              </p>
            </div>
            <div className="miner_mid_item">
              <p className="miner_mid_text text_uppercase">storage:</p>
              <p className="miner_mid_text text_uppercase">
                <span id="maxMining" className="miner_mid_number">
                  {maxMining}
                </span>
                /time
              </p>
            </div>
          </div>
        </div>
        <button id="claimButton" onClick={claimCoins} className="miner_btn">
          {claimTimer > 0 ? (
            <>
              <img
                src="./images/time.png"
                alt="clock_icon"
                className="miner_btn_img"
              />
              <p className="miner_btn_text">{formatTime(claimTimer)}</p>
            </>
          ) : (
            <p className="miner_btn_claim_text">Claim</p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Test;
