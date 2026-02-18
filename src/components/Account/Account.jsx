import "./Account.css";
import wrapUp_container from "../../assets/wrapUp_container.svg";

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
                    <h3 className="section-header">Wrap History</h3>
                    <p className="section-description">Your past monthly thought collections, folded and archived</p>
                    <img src={wrapUp_container} alt="wrap-up history" className="wrap-up-image"/>
            </section>
           
            
            <button type="submit" className="save-button">Save Changes</button>
            <button type="button" className="cancel-button">Cancel</button>
        </form>
    );
}

export default Account;