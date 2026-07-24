import { Link } from "react-router-dom";

export default function FooterThree() {
  return (
    <>
      <footer>

        {/* <!-- footer-area-start --> */}
        <section className="it-footer-wrap it-footer-style-2 fix">
          <div className="it-footer-area z-index-1 pt-200 pb-10" style={{backgroundImage: `url(/assets/img/shape/footer-bg-3-1.jpg)`}}>
            <div className="it-footer-border"><span></span></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-1-1">
                    <div className="it-footer-widget-logo mb-30">
                      <Link to="/"><img src="assets/img/logo/logo-black.png" alt="" /></Link>
                    </div>
                    <div className="it-footer-widget-text">
                      <p></p>
                    </div>
                    
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Useful Links</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-1-3">
                    <h4 className="it-footer-widget-title">Our Courses</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/courses">Higher Secondary</a></li>
                        <li><a href="#">Undergraduate</a></li>
                        <li><a href="#">Postgraduate</a></li>
                        <li><a href="#">Diploma Courses</a></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-1-4 d-flex justify-content-lg-end">
                    <div>
                      <h4 className="it-footer-widget-title">Get Contact</h4>
                      <div className="it-footer-widget-contact mb-25">
                        <ul>
                          <li><span>Phone:</span><a href="tel:+917736101353">+91 7736 1013 53</a></li>
                           <li><span>Phone:</span><a href="tel:+919895453399 ">+91 9895 4533 99 </a></li>
                          <li><span>Email:</span><a href="mailto:ansarcollege4women@gmail.com">ansarcollege4women@gmail.com</a></li>
                          <li><span>Location:</span>Uppungal Road, Near KSEB Sub Station, Punnayurkulam P.O.<br />Thrissur Dt. Kerala – 679561</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area it-copyright-ptb it-copyright-bg z-index-1 theme-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                 <div className="it-copyright-left style-2 text-center">
                  <p className="mb-0">
                    © {new Date().getFullYear()} All rights reserved. Powered by{" "}
                    <a
                      href="https://signroots.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      signrOots
                    </a>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-end --> */}

        </section>
        {/* <!-- footer-area-end --> */}

      </footer>
    </>
  )
}
