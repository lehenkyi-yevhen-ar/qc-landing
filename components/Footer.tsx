import Image from 'next/image';

export function Footer() {
  return (
    <footer className="qc-footer">
      <div className="qc-footer-gradient-bar" aria-hidden />
      <div className="qc-footer-inner">
        <div className="qc-footer-grid">
          <div className="qc-footer-card">
            <Image
              src="/footer/quitcode-logo-big.png"
              alt="QuitCode"
              width={160}
              height={40}
              className="qc-footer-logo"
            />
            <p className="qc-footer-card-desc">
              We help high-value service firms automate operations and scale without
              chaos through intelligent no-code solutions.
            </p>
            <div className="qc-footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Image src="/footer/linkedin.png" alt="" width={24} height={24} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <Image src="/footer/xcom.png" alt="" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="qc-footer-connector qc-footer-connector--services" aria-hidden>
            <Image
              src="/footer/connecting-line.png"
              alt=""
              width={125}
              height={20}
              className="qc-footer-connector-img"
            />
          </div>

          <div className="qc-footer-column">
            <h3 className="qc-footer-title">Services</h3>
            <nav className="qc-footer-links" aria-label="Services">
              <a href="/#services">Workflow Automation</a>
              <a href="/#services">Data Infrastructure</a>
              <a href="/#services">Custom Web Apps</a>
              <a href="/#services">Discovery & Strategy</a>
            </nav>
          </div>

          <div className="qc-footer-connector qc-footer-connector--contact" aria-hidden>
            <Image
              src="/footer/connecting-line.png"
              alt=""
              width={125}
              height={20}
              className="qc-footer-connector-img"
            />
          </div>

          <div className="qc-footer-column">
            <h3 className="qc-footer-title">Contact</h3>
            <div className="qc-footer-contact">
              <div className="qc-footer-contact-row">
                <Image src="/footer/mail.png" alt="" width={18} height={18} aria-hidden />
                <a href="mailto:hello@company.com">hello@company.com</a>
              </div>
              <div className="qc-footer-contact-row">
                <Image src="/footer/phone-telephone.png" alt="" width={18} height={18} aria-hidden />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="qc-footer-contact-row">
                <Image src="/footer/location.png" alt="" width={18} height={18} aria-hidden />
                <span>Lviv, Ukraine</span>
              </div>
            </div>
          </div>
        </div>

        <div className="qc-footer-bottom">
          <div>© 2025 QuitCode. All rights reserved.</div>
          <div className="qc-footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden> · </span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
