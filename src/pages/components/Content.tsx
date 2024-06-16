import windIcon from "@images/Vector (2).png";
import engineIcon from "@images/Vector (3).png";
import storageIcon from "@images/Vector (4).png";
import shopIcon from "@images/Vector (5).png";
import peopleImg from "@images/Vector (6).png";
import loveImg from "@images/Vector (7).png";
import heartImg from "@images/Vector (8).png";
import rocketImg from "@images/Vector (9).png";
import daimondImg from "@images/diamond.png";
import { UserContext } from "@src/pages/HomePage";
import Miner from "@src/pages/components/Miner";
import { useContext } from "react";

export default function Content({}) {
  const { tabNavToggle, showContent, setShowContent, setJoinCommunity } =
    useContext(UserContext);

  return (
    <div className="content_box">
      {/* <!-- boost tab  --> */}
      <div
        className={`content ${tabNavToggle === 1 ? "active" : ""} ${
          showContent === true ? "content" : ""
        } ${tabNavToggle === 1 && showContent === true ? "content" : ""}`}
      >
        <div
          className={
            showContent === true
              ? "boost_container_ctn show"
              : "boost_container_ctn"
          }
        >
          <div className="boost_container">
            <h2 className="boost_title">
              Total speed: <span className="boost_title_span">0.025</span> GDM/h
            </h2>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={windIcon} alt="wind_icon" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Speed</p>
                  <p className="boost_ctn_number">0.025 GDM/h</p>
                  <p className="boost_ctn_after">
                    After: <span>0.030</span> GDM/h
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={engineIcon} alt="engine_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Engine</p>
                  <p className="boost_ctn_number">+0% for SPEED</p>
                  <p className="boost_ctn_after">After: +1%</p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
          </div>
          <div className="boost_container second_boost_ctn">
            <h2 className="boost_title">Total storage: 0.05 GDM</h2>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={storageIcon} alt="storage_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Storage</p>
                  <p className="boost_ctn_number">0.05 GDM</p>
                  <p className="boost_ctn_after">
                    After: <span>0.065</span> GDM
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={shopIcon} alt="shop_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Containers</p>
                  <p className="boost_ctn_number">
                    You don't have a containers
                  </p>
                  <p className="boost_ctn_after">
                    More Containers, More Storage
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- offer tab  --> */}
      <div className={tabNavToggle === 2 ? "content active" : "content"}>
        <div className="offer_ctn">
          <div className="boost_container">
            <h2 className="boost_title">expanding the community</h2>
            <button
              className="boost_ctn"
              onClick={() => {
                setJoinCommunity(true);
                setShowContent(false);
              }}
            >
              <div className="boost_ctn_left">
                <img src={peopleImg} alt="wind_icon" />
                <div className="fl_col boost_ctn_mid">
                  <p className="boost_ctn_item">join community</p>
                  <p className="boost_ctn_number">inprogress (0/10)</p>
                  <p className="boost_ctn_after">
                    Claim more 0.5
                    <span>
                      <img
                        className="offer_icon_img"
                        src={daimondImg}
                        alt="daimond_offer"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </button>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={loveImg} alt="engine_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Follow & retweet</p>
                  <p className="boost_ctn_number">inprogress (0/10)</p>
                  <p className="boost_ctn_after">
                    Claim more 0.5
                    <span>
                      <img
                        className="offer_icon_img"
                        src={daimondImg}
                        alt="daimond_offer"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
          </div>
          <div className="boost_container second_boost_ctn">
            <h2 className="boost_title">expanding the mine area</h2>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={heartImg} alt="storage_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Invite Premium Friends</p>
                  <p className="boost_ctn_number">inprogress (0/10)</p>
                  <p className="boost_ctn_after">
                    Claim more 0.5
                    <span>
                      <img
                        className="offer_icon_img"
                        src={daimondImg}
                        alt="daimond_offer"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
            <div className="boost_ctn">
              <div className="boost_ctn_left">
                <img src={rocketImg} alt="shop_img" />
                <div className="fl_col">
                  <p className="boost_ctn_item">Boost Our Planet</p>
                  <p className="boost_ctn_number">inprogress (0/10)</p>
                  <p className="boost_ctn_after">
                    Claim more 0.5
                    <span>
                      <img
                        className="offer_icon_img"
                        src={daimondImg}
                        alt="daimond_offer"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right boost_icon_chevron"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- miner tab  --> */}
      <Miner />

      <div className={tabNavToggle === 4 ? "content active" : "content"}>
        <p>Tab 4</p>
      </div>
      <div className={tabNavToggle === 5 ? "content active" : "content"}>
        <p>Tab 5</p>
      </div>
    </div>
  );
}
