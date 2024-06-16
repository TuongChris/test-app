import btnClose from "@images/btn-close.png";
import chartImg from "@images/chart.png";
import daimondImg from "@images/diamond.png";

export default function BoostUpgrade({
  boostUpgrade,
  setBoostUpgrade,
  setShowContent,
}) {
  return (
    <div
      className={boostUpgrade === true ? "upgrade_boost show" : "upgrade_boost"}
    >
      <button
        className="upgrade_boost_btn"
        onClick={() => {
          setBoostUpgrade(false);
          setShowContent(true);
        }}
      >
        <img
          src={btnClose}
          alt="btn_close"
          className="upgrade_boost_btn_icon"
        />
      </button>
      <div className="upgrade_boost_container">
        <div className="upgrade_boost_ctn">
          <p className="upgrade_boost_title">
            Speed <span className="upgrade_boost_title_number">0.038</span>
          </p>
          <img
            src={daimondImg}
            alt="daimond_img_boost"
            className="upgrade_boost_daimond_icon"
          />
          <p className="upgrade_boost_des">per hour</p>
        </div>
        <div className="upgrade_boost_ctn">
          <p className="upgrade_boost_title">
            Speed <span className="upgrade_boost_title_number">0.030</span>
          </p>
          <img
            src={daimondImg}
            alt="daimond_img_boost"
            className="upgrade_boost_daimond_icon"
          />
          <p className="upgrade_boost_des">per hour</p>
        </div>
        <div className="upgrade_boost_chart">
          <div className="upgrade_boost_chart_img_item">
            <img
              src={chartImg}
              alt="chart_img"
              className="upgrade_boost_chart_img"
            />
          </div>
          <div className="upgrade_boost_chart_ctn">
            <div className="upgrade_boost_chart_ctn_item">
              <p className="upgrade_boost_title">
                Speed
                <span className="upgrade_boost_title_number">0.030</span>
              </p>
              <img
                src={daimondImg}
                alt="daimond_img_boost"
                className="upgrade_boost_daimond_icon"
              />
              <p className="upgrade_boost_des">per hour</p>
            </div>
            <div className="upgrade_boost_claimed">
              <button className="upgrade_boost_claimed_btn">
                <p className="upgrade_boost_claimed_btn_text">Claimed</p>
              </button>
            </div>
          </div>
        </div>
        <div className="upgrade_boost_bot">
          <div className="upgrade_boost_bot_title_ctn">
            <p className="upgrade_boost_bot_title">Burn</p>
            <img
              src={daimondImg}
              alt="diamond_burn"
              className="upgrade_boost_bot_img"
            />
            <p className="upgrade_boost_bot_title">0.4</p>
          </div>
          <p className="upgrade_boost_bot_des">
            you will receive gift every 24 hours
          </p>
        </div>
        <button className="upgrade_boost_upgrade_btn">Upgrade</button>
      </div>
    </div>
  );
}
