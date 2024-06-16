import Area from "@src/pages/components/Area";
import BoostUpgrade from "@src/pages/components/BoostUpgrade";
import Daily from "@src/pages/components/Daily";
import Event from "@src/pages/components/Event";
import JoinCommunity from "@src/pages/components/JoinCommunity";
import Rank from "@src/pages/components/Rank";
import { createContext, useState } from "react";
import "../assets/css/styles.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const UserContext = createContext();

export default function HomePage() {
  const [tabNavToggle, setTabNavToggle] = useState(3);
  const [showContent, setShowContent] = useState(false);

  const [totalCoins, setTotalCoins] = useState(
    () => parseFloat(localStorage.getItem("totalCoins")) || 0.0
  );
  const [lastClaimed, setLastClaimed] = useState(
    () => parseFloat(localStorage.getItem("lastClaimed")) || 0.0
  );

  const [boostUpgrade, setBoostUpgrade] = useState(false);
  const [joinCommunity, setJoinCommunity] = useState(false);
  const [eventBox, setEventBox] = useState(false);
  const [dailyBox, setDailyBox] = useState(false);
  const [rankBox, setRankBox] = useState(false);
  const [areaBox, setAreaBox] = useState(false);

  function updateTabNavToggle(id) {
    setTabNavToggle(id);
  }
  return (
    <div className="main_page page">
      <Header totalCoins={totalCoins} lastClaimed={lastClaimed} />

      <UserContext.Provider
        value={{
          tabNavToggle,
          totalCoins,
          setTotalCoins,
          lastClaimed,
          setLastClaimed,
          showContent,
          setJoinCommunity,
          setShowContent,
          setEventBox,
          setDailyBox,
          setRankBox,
          setAreaBox,
        }}
      >
        <Content />
      </UserContext.Provider>

      <BoostUpgrade
        boostUpgrade={boostUpgrade}
        setBoostUpgrade={setBoostUpgrade}
        setShowContent={setShowContent}
      />
      <JoinCommunity
        joinCommunity={joinCommunity}
        setJoinCommunity={setJoinCommunity}
      />
      <Event eventBox={eventBox} setEventBox={setEventBox} />
      <Daily dailyBox={dailyBox} setDailyBox={setDailyBox} />
      <Rank rankBox={rankBox} setRankBox={setRankBox} />
      <Area areaBox={areaBox} setAreaBox={setAreaBox} />

      <Footer
        tabNavToggle={tabNavToggle}
        updateTabNavToggle={updateTabNavToggle}
        setBoostUpgrade={setBoostUpgrade}
      />
    </div>
  );
}
