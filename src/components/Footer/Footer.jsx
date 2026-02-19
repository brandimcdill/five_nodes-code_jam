import "./Footer.css";
import footer_arrow from "../../assets/footer_arrow.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footer_arrow} alt="Footer Arrow" className="footer-arrow" />
        <p className="footer-text">© 2026 Paper Thought Inc.</p>
      </div>
      <div className="footer-right">
        <p className="footer-link">Privacy</p>
        <p className="footer-link">Terms</p>
        <p className="footer-link">Contact</p>
      </div>
    </footer>
  );
}

export default Footer;
