import closeBtn from "@images/btn-close.png";
import chartImg from "@images/chart.png";
import daimondImg from "@images/diamond.png";
import timeImg from "@images/time.png";

export default function Daily({ dailyBox, setDailyBox }) {
  return (
    <div className={dailyBox ? "daily_container show" : "daily_container"}>
      <button className="join_community_btn" onClick={() => setDailyBox(false)}>
        <img
          src={closeBtn}
          alt="btn_close"
          className="upgrade_boost_btn_icon"
        />
      </button>
      <div className="daily_box">
        <h2 className="daily_box_day">Day 2</h2>
        <img
          src={daimondImg}
          alt="daimond_img_daily"
          className="daily_box_img"
        />
        <p className="daily_box_number">0.030250</p>
      </div>
      <div className="daily_box">
        <h2 className="daily_box_day">Day 1</h2>
        <img
          src={daimondImg}
          alt="daimond_img_daily"
          className="daily_box_img"
        />
        <p className="daily_box_number">0.020250</p>
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
            <p className="daily_box_day">Day 0</p>
            <img
              src={daimondImg}
              alt="daimond_img_boost"
              className="upgrade_boost_daimond_icon"
            />
            <p className="daily_box_number">0.01012</p>
          </div>
          <div className="upgrade_boost_claimed">
            <button className="upgrade_boost_claimed_btn">
              <p className="upgrade_boost_claimed_btn_text">Claimed</p>
            </button>
          </div>
        </div>
      </div>
      <div className="daily_bot">
        <p className="daily_bot_title">free welcome gift</p>
        <p className="daily_bot_text">You will receive gifts every 24 hours</p>
      </div>
      <div className="daily_bot_time">
        <div className="miner_btn">
          <img src={timeImg} alt="clock_icon" className="miner_btn_img" />
          <p className="miner_btn_text">00:00:04</p>
        </div>
      </div>
    </div>
  );
}
