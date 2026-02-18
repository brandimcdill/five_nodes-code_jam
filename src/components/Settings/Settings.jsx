import "./Settings.css";
import paper_page from "../../assets/paper_page.svg";
import paper_plane from "../../assets/paper_plane.svg";
import paper_ball from "../../assets/paper_ball.svg";
import ToggleSwitch_theme from "../ToggleSwitch_theme/ToggleSwitch_theme";
import ToggleSwitch_basic from "../ToggleSwitch_basic/ToggleSwitch_basic";

const options = [
  { value: "paper-plane", label: "Paper Airplane", imageUrl: paper_plane },
  { value: "paper-page", label: "Paper Page", imageUrl: paper_page },
  {
    value: "crumbled-paper-ball",
    label: "Crumbled Paper Ball",
    imageUrl: paper_ball,
  },
];
function Settings() {
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <p>Manage your workplace preferences and account details.</p>
      <section className="section-container">
        <h2 className="section__title">General</h2>
        <div className="section__header">
          <h3 className="section__header">Theme</h3>
          <p className="section__description">
            Select your preferred interface appearance.
          </p>
          <ToggleSwitch_theme />
        </div>
        <div className="language">
          <h3 className="section__header">Language</h3>
          <p className="section__description">
            Choose the language for the interface.
          </p>
          <select className="language-select">
            <option value="en">English</option>
          </select>
        </div>
      </section>
      <section className="section-container">
        <h2 className="section__title">Notifications</h2>
        <div className="section__group">
          <h3 className="section__header">Daily Reflection Reminder</h3>
          <p className="section__description">
            Get a gentle nudge to unfold your thoughts.
          </p>
          <ToggleSwitch_basic />
        </div>
        <div className="weekly-summary">
          <h3 className="section__header">Weekly Wrap-up</h3>
          <p className="section__description">
            A summary of your thought patterns every Sunday
          </p>
          <ToggleSwitch_basic />
        </div>
        <div className="new-feature-updates">
          <h3 className="section__header">New Feature Announcements</h3>
          <p className="section__description">
            Updates about the Paper thought platform.
          </p>
          <ToggleSwitch_basic />
        </div>
      </section>
      <section className="section-container">
        <h2 className="section__title">PDF Export Style</h2>
        <p className="section__description">
          Choose how your monthly thoughts are folded and presented in exported
          PDFs.
        </p>
        <div className="pdf-style-options">
          {options.map((option) => (
            <label className="section__header" key={option.value}>
              <input
                className="pdf-style-radio"
                type="radio"
                name="paper-group"
                value={option.value}
              />
              <img src={option.imageUrl} alt={option.label} />
              <p> {option.label}</p>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Settings;
