import dailyIcon from "@images/daily.png";
import eventIcon from "@images/event.png";
import rankIcon from "@images/ranking.png";
import imgClockIcon from "@images/time.png";
import imgTruck from "@images/truck.png";
import { UsedAppContext } from "@src/App";
import { UserContext } from "@src/pages/HomePage";
import { useContext, useEffect, useState } from "react";

export default function Miner({}) {
  const {
    tabNavToggle,
    setEventBox,
    setDailyBox,
    setAreaBox,
    setTotalCoins,
    setLastClaimed,
    totalCoins,
    lastClaimed,
  } = useContext(UserContext);

  const [currentMining, setCurrentMining] = useState(
    () => parseFloat(localStorage.getItem("currentMining")) || 0.0
  );
  const miningSpeed = 1; // số coin đào được mỗi giờ
  const [engineBoost, setEngineBoost] = useState(100);
  const maxMining = 0.05;
  const claimCooldown = 10; // 60 giây
  const { hasClaimed } = useContext(UsedAppContext); // Sử dụng context để lấy giá trị hasClaimed
  const [claimTimer, setClaimTimer] = useState(() => {
    const savedClaimTime = parseInt(localStorage.getItem("claimTimer"));
    const savedClaimTimestamp = parseInt(
      localStorage.getItem("claimTimestamp")
    );
    const now = Math.floor(Date.now() / 1000);

    if (
      savedClaimTimestamp &&
      savedClaimTime &&
      now - savedClaimTimestamp < savedClaimTime
    ) {
      return savedClaimTime - (now - savedClaimTimestamp);
    } else {
      return hasClaimed ? 0 : claimCooldown; // Điều chỉnh giá trị return dựa trên hasClaimed
    }
  });

  useEffect(() => {
    localStorage.setItem("totalCoins", totalCoins);
  }, [totalCoins]);

  useEffect(() => {
    localStorage.setItem("currentMining", currentMining);
  }, [currentMining]);

  useEffect(() => {
    localStorage.setItem("lastClaimed", lastClaimed);
  }, [lastClaimed]);

  useEffect(() => {
    localStorage.setItem("claimTimer", claimTimer);
    localStorage.setItem("claimTimestamp", Math.floor(Date.now() / 1000));
  }, [claimTimer]);

  useEffect(() => {
    const effectiveMiningSpeedPerHour = miningSpeed * (1 + engineBoost / 100);
    const effectiveMiningSpeedPerSecond = effectiveMiningSpeedPerHour / 3600;

    const miningInterval = setInterval(() => {
      if (claimTimer > 0) {
        setCurrentMining((prevMining) => {
          const newMining = prevMining + effectiveMiningSpeedPerSecond;
          return newMining > maxMining ? maxMining : newMining;
        });
        setClaimTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(miningInterval);
  }, [claimTimer, miningSpeed, engineBoost, maxMining]);

  const claimCoins = () => {
    if (claimTimer > 0) {
      alert("Please wait for another minute.");
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
    <div className={tabNavToggle === 3 ? "content active" : "content"}>
      <div className="miner_top">
        <div className="miner_top_icon_event">
          <button className="miner_icon_ctn" onClick={() => setEventBox(true)}>
            <img src={eventIcon} alt="event_icon" className="miner_icon" />
          </button>
          <p className="miner_icon_text">Event</p>
        </div>
        <div className="icon_miner_group">
          <div className="miner_top_icon_daily">
            <button
              className="miner_icon_ctn"
              onClick={() => setDailyBox(true)}
            >
              <img src={dailyIcon} alt="daily_icon" className="miner_icon" />
            </button>
            <p className="miner_icon_text">Daily</p>
          </div>
          <div className="miner_top_icon_rank">
            <button className="miner_icon_ctn" onClick={() => setAreaBox(true)}>
              <img src={rankIcon} alt="rank_icon" className="miner_icon" />
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
              src={imgTruck}
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
        <button
          id="claimButton"
          onClick={claimCoins}
          className={claimTimer > 0 ? "miner_btn" : "miner_btn_claim"}
        >
          {claimTimer > 0 ? (
            <>
              <img
                src={imgClockIcon}
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
