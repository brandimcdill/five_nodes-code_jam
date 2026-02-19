import "./Account.css";
import wrapUp_container from "../../assets/wrapUp_container.svg";
import pmt from "../../assets/pmt.svg";
import data_icon from "../../assets/data_icon.svg";
import wrap_icon from "../../assets/wrap_icon.svg";
import passw_icon from "../../assets/passw_icon.svg";
import priv_icon from "../../assets/priv_icon.svg";
import card_icon from "../../assets/card_icon.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

function Account() {
  return (
    <form className="acct-form">
      <section className="section-container">
        <h1>Account</h1>
        <h2 className="section-title">
          <img
            src={data_icon}
            alt="Personal Data icon"
            className="section-icon"
          />{" "}
          Personal Data
        </h2>
        <label>
          First Name{" "}
          <input
            type="text"
            name="firstName"
            value="firstName"
            className="input-field"
          />
        </label>
        <label>
          Last Name{" "}
          <input
            type="text"
            name="lastName"
            value="lastName"
            className="input-field"
          />
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            value="email@example.com"
            className="input-field"
          />
        </label>
        <label>
          Bio{" "}
          <input
            type="text"
            name="bio"
            value="Bio content here"
            className="input-field"
          />
        </label>
      </section>
      <section className="section-container">
        <h2 className="section-header">
          <img
            src={wrap_icon}
            alt="Wrap Up History icon"
            className="section-icon"
          />
          Wrap Up History
        </h2>

        <p className="section-description">
          Your past monthly thought collections, folded and archived
        </p>
        <img
          src={wrapUp_container}
          alt="wrap-up history"
          className="wrap-up-image"
        />
      </section>
      <form className="section-container">
        <h2 className="section-header">
          <img src={passw_icon} alt="Password icon" className="section-icon" />
          Password
        </h2>
        <label>
          Current Password
          <input
            type="password"
            name="currentPassword"
            className="input-field"
          />
        </label>
        <label>
          New Password
          <input type="password" name="newPassword" className="input-field" />
        </label>
        <label>
          Confirm New Password
          <input
            type="password"
            name="confirmNewPassword"
            className="input-field"
          />
        </label>
        <button type="submit" className="change-password-button">
          Update Password
        </button>
      </form>
      <section className="section-container">
        <h2 className="section-header">
          <img src={priv_icon} alt="Privacy icon" className="section-icon" />{" "}
          Privacy
        </h2>

        <div className="payment-method-container">
          <h3 className="section_sub-header">Payment Method</h3>
          <img
            src={card_icon}
            alt="credit card icon"
            className="payment-method-icon"
          />
        </div>
        <h3 className="section_sub-header_delete">Danger Zone</h3>
        <p className="section-description">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <button type="submit" className="delete-account-button">
          Delete Account
        </button>
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

export default Account;
