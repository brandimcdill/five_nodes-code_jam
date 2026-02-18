import './ToggleSwitch_basic.css';

function ToggleSwitch({  }) {
    return (
        <label className="toggle_switch">
            <input type="checkbox" id="toggle" className="toggle_switch__checkbox" />
            <span className="toggle_switch__circle"></span>
          
        </label>)}

export default ToggleSwitch;