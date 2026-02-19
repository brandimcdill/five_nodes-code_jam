import "./ToggleSwitch_theme.css";

function ToggleSwitch({}) {
  return (
    <label className="toggle_switch-theme">
      <input
        type="checkbox"
        id="toggle"
        className="toggle_switch-theme__checkbox"
      />
      <span className="toggle_switch-theme__square"></span>
      <span className="toggle_switch-theme__text toggle_switch-theme__text-light">
        Light
      </span>
      <span className="toggle_switch-theme__text toggle_switch-theme__text-dark">
        Dark
      </span>
    </label>
  );
}

export default ToggleSwitch;
