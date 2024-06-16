import React from "react";

export default function Footer({
  tabNavToggle,
  updateTabNavToggle,
  setBoostUpgrade,
}) {
  return (
    <div className="tab_box">
      <button
        className={tabNavToggle === 1 ? "tab_btn active" : "tab_btn"}
        onClick={() => {
          updateTabNavToggle(1);
          setBoostUpgrade(true);
        }}
      >
        Boost
      </button>
      <button
        className={tabNavToggle === 2 ? "tab_btn active" : "tab_btn"}
        onClick={() => updateTabNavToggle(2)}
      >
        Offer
      </button>
      <button
        className={tabNavToggle === 3 ? "tab_btn active" : "tab_btn"}
        onClick={() => updateTabNavToggle(3)}
      >
        Miner
      </button>
      <button
        className={tabNavToggle === 4 ? "tab_btn active" : "tab_btn"}
        onClick={() => updateTabNavToggle(4)}
      >
        Growth
      </button>
      <button
        className={tabNavToggle === 5 ? "tab_btn active" : "tab_btn"}
        onClick={() => updateTabNavToggle(5)}
      >
        Dapps
      </button>
    </div>
  );
}
