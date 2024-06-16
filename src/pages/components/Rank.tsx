import React from "react";
import btnClose from "@images/btn-close.png";
import avatarImg from "@images/user.png";
import daimondImg from "@images/diamond.png";

export default function Rank({ rankBox, setRankBox }) {
  const rankData = [
    {
      username: "GDM Updates",
      userImg: avatarImg,
      daimondValue: "+0.25",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 2",
      userImg: avatarImg,
      daimondValue: "+0.26",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 3",
      userImg: avatarImg,
      daimondValue: "+0.27",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates",
      userImg: avatarImg,
      daimondValue: "+0.25",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 2",
      userImg: avatarImg,
      daimondValue: "+0.26",
      daimondImg: daimondImg,
    },
    {
      username: "GDM Updates 3",
      userImg: avatarImg,
      daimondValue: "+0.27",
      daimondImg: daimondImg,
    },
  ];
  return (
    <div className={rankBox ? "rank_container show" : "rank_container"}>
      <button className="join_community_btn">
        <img
          src={btnClose}
          alt="btn_close"
          onClick={() => setRankBox(false)}
          className="upgrade_boost_btn_icon"
        />
      </button>
      <div className="rank_ctn">
        <div className="rank_ctn_top">
          <h2 className="rank_ctn_title">YOUR NETWORK (24)</h2>
          <p className="rank_ctn_text">
            Earn 20% cashback whenever your friend claims GDM. Double if they
            are Premium.
          </p>
        </div>
        <button className="rank_ctn_btn">Rank</button>
      </div>
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
      <div className="rank_total_view">
        <p className="rank_total">Total Received:</p>
        <img
          src={daimondImg}
          alt="daimond_img"
          className="join_community_daimond_img"
        />
        <p className="rank_total_number">1.23456</p>
      </div>
      <div className="rank_bot_btn">
        <button className="rank_bot_btn_left">
          <i className="fa-regular fa-clone rank_bot_btn_left_icon"></i>
        </button>
        <button className="rank_bot_btn_invite">Invite a friend</button>
        <button className="rank_bot_btn_left">
          <i className="fa-solid fa-qrcode rank_bot_btn_left_icon"></i>
        </button>
      </div>
    </div>
  );
}
