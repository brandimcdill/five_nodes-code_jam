import './ToggleSwitch_basic.css';

function ToggleSwitch({  }) {
    return (
        <label className="toggle-switch">
            <input type="checkbox" id="toggle" className="toggle-switch__checkbox" />
            <span className="toggle-switch__circle"></span>
          
        </label>)}

export default ToggleSwitch;