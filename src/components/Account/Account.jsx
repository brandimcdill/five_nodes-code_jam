import "./Account.css";
import wrapUp_container from "../../assets/wrapUp_container.svg";
import pmt from "../../assets/pmt.svg";

function Account() {
    return (
        <form className="acct-form">
           <section className="section-container"> 
            <h1>Account</h1>
                <h2 className="section-title">Personal Data</h2>
                 <label>First Name <input type="text" name="firstName" value="firstName" className="input-field"/></label>
                    <label>Last Name <input type="text" name="lastName" value="lastName" className="input-field"/></label>
                    <label>Email <input type="email" name="email" value="email@example.com" className="input-field"/></label>
                    <label>Bio <input type="text" name="bio" value="Bio content here" className="input-field"/></label>
            </section>
            <section className="section-container">
                    <h2 className="section-header">Wrap History</h2>
                    <p className="section-description">Your past monthly thought collections, folded and archived</p>
                    <img src={wrapUp_container} alt="wrap-up history" className="wrap-up-image"/>
            </section>
           <form className="section-container">
                    <h2 className="section-header">Password</h2>
                    <label>Current Password <input type="password" name="currentPassword" className="input-field"/></label>
                    <label>New Password <input type="password" name="newPassword" className="input-field"/></label>
                    <label>Confirm New Password <input type="password" name="confirmNewPassword" className="input-field"/></label>
                    <button type="submit" className="change-password-button">Update Password</button>
            </form>
            <section className="section-container">
                <h2 className="section-header">Privacy</h2>
                <h3 className="section_sub-header">Payment method</h3>
                <img src={pmt} alt="payment method" className="payment-method-image"/>
                
                <h3 className="section_sub-header_delete">Danger Zone</h3>
                <p className="section-description">Once you delete your account, there is no going back. Please be certain.</p>
                <button type="submit" className="delete-account-button">Delete Account</button>
                
            </section>
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save</button>
        </form>
    );
}

export default Account;