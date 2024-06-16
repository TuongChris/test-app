import btnClose from "@images/btn-close.png";
import daimondImg from "@images/diamond.png";
import userImg from "@images/user.png";

export default function JoinCommunity({ joinCommunity, setJoinCommunity }) {
  const rankData = [
    {
      username: "GDM Updates",
      userImg: userImg,
      daimondValue: "+0.25",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 2",
      userImg: userImg,
      daimondValue: "+0.26",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 3",
      userImg: userImg,
      daimondValue: "+0.27",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates",
      userImg: userImg,
      daimondValue: "+0.25",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 2",
      userImg: userImg,
      daimondValue: "+0.26",
      daimondImg: daimondImg,
    },
  ];
  return (
    <div className={joinCommunity ? "join_community show" : "join_community"}>
      <button
        className="join_community_btn"
        onClick={() => setJoinCommunity(false)}
      >
        <img
          src={btnClose}
          alt="btn_close"
          className="upgrade_boost_btn_icon"
        />
      </button>
      <h2 className="join_community_title">Join Community</h2>
      <div className="upgrade_boost_container">
        <div className="join_community_ctn">
          {rankData.map((item, index) => (
            <div className="join_community_ctn_item" key={index}>
              <div className="join_community_item">
                <img
                  src={item.userImg}
                  alt="user_img"
                  className="join_community_user_img"
                />
                <p className="join_community_name">{item.username}</p>
              </div>
              <div className="join_community_item">
                <img
                  src={item.daimondImg}
                  alt="daimond_img"
                  className="join_community_daimond_img"
                />
                <p className="join_community_name">{item.daimondValue}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="join_community_ctn">
          <div className="join_community_ctn_item2">
            <div className="join_community_item">
              <img
                src={userImg}
                alt="user_img"
                className="join_community_user_img"
              />
              <p className="join_community_name">GDM Updates (claimed)</p>
            </div>
            <div className="join_community_item">
              <img
                src={daimondImg}
                alt="daimond_img"
                className="join_community_daimond_img"
              />
              <p className="join_community_name_blur">+0.25</p>
            </div>
          </div>
          <div className="join_community_ctn_item2">
            <div className="join_community_item">
              <img
                src={userImg}
                alt="user_img"
                className="join_community_user_img"
              />
              <p className="join_community_name">GDM Updates (claimed)</p>
            </div>
            <div className="join_community_item">
              <img
                src={daimondImg}
                alt="daimond_img"
                className="join_community_daimond_img"
              />
              <p className="join_community_name_blur">+0.25</p>
            </div>
          </div>
        </div>
        <p className="join_community_bot_text">
          Join communities to receive rewards
        </p>
        <button className="upgrade_boost_upgrade_btn">Got it</button>
      </div>
    </div>
  );
}
