import "./Footer.css";
import footer_arrow from "../../assets/footer_arrow.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
            <img src={footer_arrow} alt="Footer Arrow" /> © 2026 Paper Thought
            Inc.
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-link">Privacy</p>
          <p className="footer-link">Terms</p>
          <p className="footer-link">Contact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
