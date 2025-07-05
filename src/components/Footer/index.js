"use client"
import { Bio } from "../../data/constants"
import { Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h1 className="footer-logo">SZE LER</h1>
              <p className="footer-tagline">Building digital experiences with passion</p>
            </div>

            <nav className="footer-navigation">
              <h3 className="nav-title">Navigation</h3>
              <div className="nav-links">
                <a href="#about" className="footer-nav-link">
                  About
                </a>
                <a href="#skill" className="footer-nav-link">
                  Skills
                </a>
                <a href="#experience" className="footer-nav-link">
                  Experience
                </a>
                <a href="#project" className="footer-nav-link">
                  Projects
                </a>
                <a href="#education" className="footer-nav-link">
                  Education
                </a>
              </div>
            </nav>

            <div className="footer-social">
              <h3 className="social-title">Connect</h3>
              <div className="social-media-icons">
                <a
                  href={Bio.linkedin}
                  className="social-media-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={Bio.facebook}
                  className="social-media-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={Bio.instagram}
                  className="social-media-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Chuah Sze Ler. All Rights Reserved.</p>
            <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
