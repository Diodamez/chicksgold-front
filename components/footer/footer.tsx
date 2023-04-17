import Image from "next/image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={`${styles.payment_container}`}>
        <div className={`${styles.payment}`}>
          <Image
            src="https://chicksgold.com/payment-methods/visa.svg"
            alt="visa"
            width={95}
            height={29}
          />
          <Image
            src="https://chicksgold.com/payment-methods/mastercard.svg"
            alt="mastercard"
            width={63}
            height={46}
          />
          <Image
            src="https://chicksgold.com/payment-methods/amex.svg"
            alt="amex"
            width={95}
            height={29}
          />
          <Image
            src="https://chicksgold.com/payment-methods/skrill.svg"
            alt="skrill"
            width={95}
            height={29}
          />
          <Image
            src="https://chicksgold.com/payment-methods/crypto.svg"
            alt="crypto"
            width={95}
            height={29}
          />
          <div style={{ opacity: 0.6 }}>and 50+ more</div>
        </div>
      </div>
      <div className={`${styles.about_container}`}>
        <div className={`${styles.about}`}>
          <div className={`${styles.socials}`}>
            <a href="">
              <Image
                src="https://chicksgold.com/icons/facebook.svg"
                alt="facebook"
                width={40}
                height={40}
              />
            </a>
            <a href="">
              <Image
                src="https://chicksgold.com/icons/instagram.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
            <a href="">
              <Image
                src="https://chicksgold.com/icons/twitter.svg"
                alt="twitter"
                width={40}
                height={40}
              />
            </a>
            <a href="">
              <Image
                src="	https://chicksgold.com/icons/discord.svg"
                alt="discord"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className={`${styles.about_info}`}>
            <div className={`${styles.logo_section}`}>
              <Image
                className={`${styles.logo}`}
                src={"https://chicksgold.com/logo/chicks-logo-large.svg"}
                width={188}
                height={42}
                alt="logo"
              />
              <div className={`${styles.email}`}>support@chicksgold.com</div>
            </div>
            <div className={`${styles.info_section}`}>
              <div className={`${styles.info_title}`}>Chicks Gold</div>
              <a href="" className={`${styles.footer_link}`}>
                Games
              </a>
              <a href="" className={`${styles.footer_link}`}>
                About Us
              </a>
              <a href="" className={`${styles.footer_link}`}>
                Blog
              </a>
              <a href="" className={`${styles.footer_link}`}>
                Sitemap
              </a>
            </div>
            <div className={`${styles.info_section}`}>
              <div className={`${styles.info_title}`}>Support</div>
              <a href="" className={`${styles.footer_link}`}>
                Contact Us
              </a>
              <a href="" className={`${styles.footer_link}`}>
                FAQ
              </a>
            </div>
            <div className={`${styles.info_section}`}>
              <div className={`${styles.info_title}`}>Legal</div>
              <a href="" className={`${styles.footer_link}`}>
                Privacy Policy
              </a>
              <a href="" className={`${styles.footer_link}`}>
                Terms of Service
              </a>
              <a href="" className={`${styles.footer_link}`}>
                Copyright Policy
              </a>
            </div>
            <div className={`${styles.info_section}`}>
              <a href="" className={`${styles.reviews}`}>
                <div>
                  <Image
                    className={`${styles.logo}`}
                    src={"https://chicksgold.com/icons/trust-pilot-5-star.svg"}
                    width={108}
                    height={21}
                    alt="logo"
                  />
                </div>
                <span>Trustpilot Reviews</span>
              </a>
            </div>
          </div>
          <div className={`${styles.legal}`}>
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
