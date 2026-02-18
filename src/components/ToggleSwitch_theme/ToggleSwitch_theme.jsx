import './ToggleSwitch_theme.css';

function ToggleSwitch({  }) {
    return (
        <label className="toggle-switch">
            <input type="checkbox" id="toggle" className="toggle-switch__checkbox" />
            <span className="toggle-switch__rectangle"></span>
            <span className="toggle-switch__text-light">Light</span>
            <span className="toggle-switch__text-dark">Dark</span>
        </label>)}

export default ToggleSwitch;