import btnClose from "@images/btn-close.png";
import medalIcon from "@images/medal.png";
import avatarImg from "@images/user.png";

export default function Event({ eventBox, setEventBox }) {
  const users = [
    {
      username: "username",
      profit: "+344",
      usdt: "200 USDT",
      avatar: avatarImg,
    },
    {
      username: "username2",
      profit: "+345",
      usdt: "201 USDT",
      avatar: avatarImg,
    },
    {
      username: "username3",
      profit: "+346",
      usdt: "202 USDT",
      avatar: avatarImg,
    },
    {
      username: "username3",
      profit: "+346",
      usdt: "202 USDT",
      avatar: avatarImg,
    },
    {
      username: "username3",
      profit: "+346",
      usdt: "202 USDT",
      avatar: avatarImg,
    },
  ];
  return (
    <div className={eventBox ? "event_content show" : "event_content"}>
      <button className="join_community_btn" onClick={() => setEventBox(false)}>
        <img
          src={btnClose}
          alt="btn_close"
          className="upgrade_boost_btn_icon"
        />
      </button>
      <div className="envent_top">
        <button className="btn_envent_top active">Friends</button>
        <button className="btn_envent_top">Mine</button>
      </div>
      <div className="event_title">
        <img src={medalIcon} alt="medal" className="event_medal_icon" />
        <div className="fl_col">
          <p className="event_title_h2">Top New Friends</p>
          <p className="event_title_text">
            Total number of new friends (July 1 - July 5)
          </p>
        </div>
      </div>
      <div className="event_rank">
        {users.map((user, index) => (
          <div className="top_user" key={index}>
            <img src={user.avatar} alt="avatar" className="avatar_user" />
            <p className="top_user_username">{user.username}</p>
            <p className="top_user_profit">{user.profit}</p>
            <p className="top_user_usdt">{user.usdt}</p>
          </div>
        ))}
      </div>
      <div className="event_rank">
        <p className="event_rank_user">
          Rank: <span className="event_rank_user">167</span>
        </p>
        <div className="top_user">
          <img src={avatarImg} alt="avatar" className="avatar_user" />
          <p className="top_user_username">yourname</p>
          <p className="top_user_profit">+344</p>
          <p className="top_user_usdt">200 USDT</p>
        </div>
      </div>
      <div className="event_bottom">
        <p className="event_bottom_h3">
          Joining the event will get 0.5 GDM free
        </p>
        <p className="event_bottom_text">
          Being in the top 5 will receive USDT rewards
        </p>
      </div>
    </div>
  );
}
