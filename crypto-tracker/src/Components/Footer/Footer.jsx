import classes from "./footer.module.css"
import { insta, face, twitter, youtube } from "./FooterIcons"
export default function Footer() {
  return (
    <footer>
      <div className={classes.footerLeft}>
        <p style={{ fontSize: "24px", color: "white", fontWeight: "600" }}>Crypto<span style={{ color: "#0FAE96" }}>Cap</span></p>
        <div className={classes.social}>
          {insta} {face} {twitter} {youtube}
        </div>

        <p style={{color: "white", fontSize: "20px", textAlign: "center"}}>Data API powered by <a target="_blank" href="https://docs.coingecko.com/v3.0.1/reference/introduction">CoinGecko</a></p>
      </div>

      <div className={classes.footerRight}>
        <div className={classes.footerNav}>
          <p>About Us</p>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Legal & Privacy</li>
          </ul>
        </div>

        <div className={classes.footerNav}>
          <p>Services</p>
          <ul>
            <li>Application</li>
            <li>Buy Crypto</li>
            <li>Affilliate</li>
            <li>Institutional Services</li>
          </ul>
        </div>

        <div className={classes.footerNav}>
          <p>Learn</p>
          <ul>
            <li>What is Crypto?</li>
            <li>Crypto Basics</li>
            <li>Tips and Tutorials</li>
            <li>Marked Update</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}