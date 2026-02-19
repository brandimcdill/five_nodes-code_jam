import "./Settings.css";
import paper_page from "../../assets/paper_page.svg";
import paper_plane_black from "../../assets/paper_plane_black.svg";
import paper_ball from "../../assets/paper_ball.svg";
import ToggleSwitch_theme from "../ToggleSwitch_theme/ToggleSwitch_theme";
import ToggleSwitch_basic from "../ToggleSwitch_basic/ToggleSwitch_basic";
import gen_icon from "../../assets/gen_icon.svg";
import notif_icon from "../../assets/notif_icon.svg";
import pdf_icon from "../../assets/pdf_icon.svg";
import faq_icon from "../../assets/faq_icon.svg";
import email_icon from "../../assets/email_icon.svg";
import ques_icon from "../../assets/ques_icon.svg";
import talk_icon from "../../assets/talk_icon.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

const options = [
  {
    value: "paper-plane",
    label: "Paper Airplane",
    imageUrl: paper_plane_black,
  },
  { value: "paper-page", label: "Paper Page", imageUrl: paper_page },
  {
    value: "crumbled-paper-ball",
    label: "Crumbled Paper Ball",
    imageUrl: paper_ball,
  },
];
function Settings() {
  return (
    <form className="settings-form">
      <h1>Settings</h1>
      <p>Manage your workplace preferences and account details.</p>
      <section className="section-container">
        <h2 className="section-title">
          <img
            src={gen_icon}
            alt="General settings icon"
            className="section-icon"
          />
          General
        </h2>
        <div className="section-header">
          <h3 className="section-header">Theme</h3>
          <div className="selection-container">
            <p className="section-description">
              Select your preferred interface appearance.
            </p>
            <ToggleSwitch_theme />
          </div>
        </div>
        <div className="language">
          <h3 className="section-header">Language</h3>
          <div className="selection-container">
            <p className="section-description">
              Choose the language for the interface.
            </p>
            <select className="language-select">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">
          <img
            src={notif_icon}
            alt="Notification settings icon"
            className="section-icon"
          />
          Notifications
        </h2>
        <div className="section-group">
          <h3 className="section-header">Daily Reflection Reminder</h3>
          <div className="selection-container">
            <p className="section-description">
              Get a gentle nudge to unfold your thoughts.
            </p>
            <ToggleSwitch_basic />
          </div>
        </div>
        <div className="weekly-summary">
          <h3 className="section-header">Weekly Wrap-up</h3>
          <div className="selection-container">
            <p className="section-description">
              A summary of your thought patterns every Sunday
            </p>
            <ToggleSwitch_basic />
          </div>
        </div>
        <div className="new-feature-updates">
          <h3 className="section-header">New Feature Announcements</h3>
          <div className="selection-container">
            <p className="section-description">
              Updates about the Paper thought platform.
            </p>
            <ToggleSwitch_basic />
          </div>
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">
          <img
            src={pdf_icon}
            alt="PDF export settings icon"
            className="section-icon"
          />
          PDF Export Style
        </h2>
        <p className="section-description">
          Choose how your monthly thoughts are folded and presented in exported
          PDFs.
        </p>
        <div className="pdf-style-options">
          {options.map((option) => (
            <label className="section-header" key={option.value}>
              <div className="pdf-option-container">
                <img
                  src={option.imageUrl}
                  alt={option.label}
                  className="pdf-image"
                />
                <p> {option.label}</p>
                <input
                  className="pdf-style-radio"
                  type="radio"
                  name="paper-group"
                  value={option.value}
                />
              </div>
            </label>
          ))}
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">
          <img
            src={faq_icon}
            alt="FAQ settings icon"
            className="section-icon"
          />
          Support & FAQs
        </h2>
        <div className="selection-container">
          <p className="section-header">
            <img src={ques_icon} alt="Help Center" className="section-icon" />
            Help Center
          </p>
          <img src={arrow_icon} alt="Arrow icon" className="arrow-icon" />
        </div>
        <div className="selection-container">
          <p className="section-header">
            <img src={talk_icon} alt="Contact Us" className="section-icon" />
            Contact Us
          </p>
          <img src={arrow_icon} alt="Arrow icon" className="arrow-icon" />
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">
          <img
            src={email_icon}
            alt="Subscription settings icon"
            className="section-icon"
          />
          Subscriptions
        </h2>
        <div className="selection-container">
          <p className="section-header">Marketing Subscriptions</p>
          <img src={arrow_icon} alt="Arrow icon" className="arrow-icon" />
        </div>
      </section>
      <button type="button" className="cancel-button">
        Cancel
      </button>
      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );
}

export default Settings;
