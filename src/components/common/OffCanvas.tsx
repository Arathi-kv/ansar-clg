import { Link } from "react-router-dom";
import MobileMenu from "@/layouts/headers/MobileMenu";


interface OffCanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}


export default function OffCanvas({ offCanvasOpen, setOffCanvasOpen }: OffCanvasProps) {
  return (
    <>
      {/* <!-- it-offcanvas-area-start --> */}
      <div className="it-offcanvas-area">
        <div className={`itoffcanvas  ${offCanvasOpen ? "opened" : ""}`}>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setOffCanvasOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img src="assets/img/logo/logo-black.png" alt="" />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non.
              Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            <MobileMenu />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fal fa-envelope"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:ansarcollege4women@gmail.com" className="border-line">ansarcollege4women@gmail.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fal fa-phone-alt"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                 <a href="tel:+919895453399" className="d-block">
                      +91 9895 4533 99
                    </a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fas fa-map-marker-alt"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
               <a href="#">
                Uppungal Road,<br />
                Near KSEB <br />Sub Station,
                Punnayurkulam P.O.<br />
                Thrissur Dt.<br /> Kerala – 679561
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${offCanvasOpen ? "apply" : ""}`} onClick={() => setOffCanvasOpen(false)} style={{cursor: 'pointer'}}></div>
      {/* <!-- it-offcanvas-area-end --> */}
    </>
  )
}
