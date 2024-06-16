export default function AreaBtn({ isActive, label, onClick }) {
  return (
    <button
      className={isActive ? "area_tab_btn active" : "area_tab_btn"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
