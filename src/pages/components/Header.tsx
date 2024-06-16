import daimondImg from "@images/diamond.png";

export default function Header({ totalCoins, lastClaimed }) {
  return (
    <div className="header">
      <p className="username_text">Username</p>
      <div className="fl_row">
        <img src={daimondImg} alt="diamond2" className="img_daimond_mini" />
        <h1 className="page_welcome_reward_number">{totalCoins.toFixed(6)}</h1>
      </div>
      <div className="fl_row last_claimed_text">
        <p>
          Last claimed:
          <span id="lastClaimed" className="last_claimed_number">
            {lastClaimed}
          </span>
          GDM
        </p>
      </div>
    </div>
  );
}
