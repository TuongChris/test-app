import btnClose from "@images/btn-close.png";
import daimondImg from "@images/diamond.png";
import medalImg from "@images/medal.png";
import avatarImg from "@images/user.png";
import AreaBtn from "@src/components/AreaBtn";
import { useState } from "react";

const CommunityItem = ({ data }) => (
  <div className="join_community_ctn">
    {data.map((item, index) => (
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
);

const TabContent = ({ title, subtitle, data, data2 }) => (
  <>
    <div className="area_content_ctn">
      <div className="area_content_ctn_title">
        <img src={medalImg} alt="medal_img" className="area_content_ctn_icon" />
        <div className="area_content_title">
          <p className="area_content_title_h2">{title}</p>
          <p className="area_content_title_h3">{subtitle}</p>
        </div>
      </div>
      <CommunityItem data={data} />
    </div>
    <div className="area_content_ctn">
      <div className="area_content_ctn_title">
        <img src={medalImg} alt="medal_img" className="area_content_ctn_icon" />
        <div className="area_content_title">
          <p className="area_content_title_h2">TOP 3 EARN</p>
          <p className="area_content_title_h3">Latest 24 hour results</p>
        </div>
      </div>
      <CommunityItem data={data2} />
    </div>
  </>
);

export default function Area({ areaBox, setAreaBox }) {
  const [areaTabBtn, setAreaTabBtn] = useState(1);

  const areaData = [
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
      username: "GDM Updates 1",
      userImg: avatarImg,
      daimondValue: "+0.25",
      daimondImg: daimondImg,
    },
  ];
  const areaData2 = [
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

  const globalData = areaData;
  const globalData2 = areaData2;

  const friendsData = areaData;
  const friendsData2 = areaData2;

  return (
    <div
      className={
        areaBox ? "area_global_container show" : "area_global_container"
      }
    >
      <button className="join_community_btn" onClick={() => setAreaBox(false)}>
        <img
          src={btnClose}
          alt="btn_close"
          className="upgrade_boost_btn_icon"
        />
      </button>

      <div className="area_tab_btn_ctn">
        <AreaBtn
          isActive={areaTabBtn === 1}
          label="Area"
          onClick={() => setAreaTabBtn(1)}
        />
        <AreaBtn
          isActive={areaTabBtn === 2}
          label="Global"
          onClick={() => setAreaTabBtn(2)}
        />
        <AreaBtn
          isActive={areaTabBtn === 3}
          label="Friends"
          onClick={() => setAreaTabBtn(3)}
        />
      </div>

      <div className="area_content_box">
        <div
          className={areaTabBtn === 1 ? "area_content active" : "area_content"}
        >
          <TabContent
            title="TOP GLOBAL GDM"
            subtitle="Your ranking: 100.000"
            data={areaData}
            data2={areaData2}
          />
        </div>

        <div
          className={areaTabBtn === 2 ? "area_content active" : "area_content"}
        >
          <TabContent
            title="TOP GLOBAL FRIENDS"
            subtitle="Your ranking: 100.000"
            data={globalData}
            data2={globalData2}
          />
        </div>

        <div
          className={areaTabBtn === 3 ? "area_content active" : "area_content"}
        >
          <TabContent
            title="YOUR AREA: 0007"
            subtitle="Your ranking: 100 / 25.540 people."
            data={friendsData}
            data2={friendsData2}
          />
        </div>
      </div>
    </div>
  );
}
