import React from "react";

export default function IntroductionPageBtn({ text, onClick }) {
  return (
    <button className="btn_nav" onClick={onClick}>
      <span className="btn_nav_text">{text}</span>
    </button>
  );
}
