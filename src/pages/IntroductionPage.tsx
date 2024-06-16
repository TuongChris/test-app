import {
  default as daimondImg,
  default as daimondImg2,
} from "@images/diamond.png";
import truckImg from "@images/truck.png";
import IntroductionPageBtn from "@src/components/IntroductionPageBtn";
import "@styles/introductionPage.css";
import { useEffect, useState } from "react";

export default function IntroductionPage({ onClaim }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [transitionState, setTransitionState] = useState("enter");

  useEffect(() => {
    setTransitionState("enter");
  }, [currentPage]);

  const navigateToPage = (pageNumber: number) => {
    setTransitionState("exit");
    setTimeout(() => {
      setCurrentPage(pageNumber);
    }, 300);
  };
  return (
    <>
      {currentPage === 1 && (
        <div className="introduction_page">
          <div
            className={`page_welcome page1 ${
              currentPage === 1 ? `page-${transitionState}-active` : ""
            }`}
          >
            <img src={daimondImg} alt="diamond" />
            <p className="page_wel_text">
              Where hidden green diamonds (GDM) will be mined.
            </p>
          </div>
          <IntroductionPageBtn
            text="create"
            onClick={() => navigateToPage(2)}
          />
        </div>
      )}
      {currentPage === 2 && (
        <div className="introduction_page">
          <div
            className={`page_welcome page1 ${
              currentPage === 2 ? `page-${transitionState}-active` : ""
            }`}
          >
            <img src={truckImg} alt="truck" />
            <p className="page_wel_text">You have a miner. Let's launch it!</p>
          </div>
          <IntroductionPageBtn text="start" onClick={() => navigateToPage(3)} />
        </div>
      )}
      {currentPage === 3 && (
        <div className="introduction_page">
          <div
            className={`page_welcome page1 ${
              currentPage === 3 ? `page-${transitionState}-active` : ""
            }`}
          >
            <p className="page_welcome_reward_title">You Receive a Reward</p>
            <div className="page_welcome_reward">
              <div className="page_welcome_reward_ctn">
                <img
                  src={daimondImg2}
                  alt="diamond2"
                  className="img_daimond_mini"
                />
                <p className="page_welcome_reward_number">0.010250</p>
              </div>
            </div>
            <p className="page_welcome_reward_text">
              Congratulations on reaching rank 167. Please add more new friends
              to receive USDT and GDM prizes.
            </p>
          </div>
          <IntroductionPageBtn text="claim" onClick={onClaim} />
        </div>
      )}
    </>
  );
}
