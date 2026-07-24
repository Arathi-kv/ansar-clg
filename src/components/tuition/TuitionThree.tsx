import { Link } from "react-router-dom";


export default function TuitionThree() {
  return (
    <>
      {/* <!-- tuition-area-start --> */}
      <section className="it-tuition-area z-index-2 pt-130 pb-80" data-background="assets/img/shape/tution-3-1.png">
        <img className="it-tuition-shape-2 d-none d-md-block" data-parallax='{"x": 200, "smoothness": 30}' src="assets/img/shape/tution-3-2.png" alt="" />
        <div className="container">
          <div className="row gx-35">
            <div className="col-xl-4 col-lg-6 mb-50 wow itfadeLeft" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-tuition-left">
                <div className="it-categories-section-title-box mb-20">
                  <span className="it-section-subtitle">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 2.24284H16.6667V1.40951C16.6667 1.18849 16.5789 0.97653 16.4226 0.82025C16.2663 0.663969 16.0543 0.576172 15.8333 0.576172C13.3333 0.576172 10.5708 0.709505 9.16667 2.04284C7.7625 0.709505 5 0.576172 2.5 0.576172C2.27899 0.576172 2.06702 0.663969 1.91074 0.82025C1.75446 0.97653 1.66667 1.18849 1.66667 1.40951V2.24284H0.833333C0.61232 2.24284 0.400358 2.33064 0.244078 2.48692C0.0877973 2.6432 0 2.85516 0 3.07617V13.0762C0 13.2972 0.0877973 13.5091 0.244078 13.6654C0.400358 13.8217 0.61232 13.9095 0.833333 13.9095H17.5C17.721 13.9095 17.933 13.8217 18.0893 13.6654C18.2455 13.5091 18.3333 13.2972 18.3333 13.0762V3.07617C18.3333 2.85516 18.2455 2.6432 18.0893 2.48692C17.933 2.33064 17.721 2.24284 17.5 2.24284ZM15.8333 1.40951V11.4095C13.5542 11.4095 11.0708 11.5178 9.58333 12.5345V2.80534C10.675 1.53034 13.375 1.40951 15.8333 1.40951ZM8.75 2.80534V12.5345C7.2625 11.5178 4.77917 11.4095 2.5 11.4095V1.40951C4.95833 1.40951 7.65833 1.53034 8.75 2.80534ZM0.833333 3.07617H1.66667V11.4095C1.66667 11.6305 1.75446 11.8425 1.91074 11.9988C2.06702 12.155 2.27899 12.2428 2.5 12.2428C4.53333 12.2428 6.72917 12.3262 8.04583 13.0762H0.833333V3.07617ZM17.5 13.0762H10.2875C11.6042 12.3262 13.8 12.2428 15.8333 12.2428C16.0543 12.2428 16.2663 12.155 16.4226 11.9988C16.5789 11.8425 16.6667 11.6305 16.6667 11.4095V3.07617H17.5V13.0762Z" fill="#03594E" />
                    </svg>
                    Tuition Fees</span>
                  <h4 className="it-section-title">Educeet University <br />Offers
                    Affordable <br />Tuition Fees</h4>
                </div>
                <div className="it-tuition-text">
                  <p>Enhance your knowledge and grow professionally by learning new skills anytime, anywhere. Access expert-led courses designed to help you succeed</p>
                </div>
                <div className="it-tuition-btn">
                  <Link to="/price" className="it-btn-yellow theme-bg border-radius-100">
                    <span>
                      <span className="text-1">Plan Details</span>
                      <span className="text-2">Plan Details</span>
                    </span>
                    <i>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50 wow itfadeRight" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-tuition-item active">
                <h5 className="it-tuition-title-sm">Undergraduate Programs</h5>
                <div className="it-tuition-list-box mb-35">
                  <span>College of Arts and Sciences</span>
                  <ul>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Full-Time Tuition (per semester): $241
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Part-Time Tuition (per credit): $141
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="it-tuition-list-box">
                  <span>School of Business</span>
                  <ul>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Full-Time Tuition (per semester): $241
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Part-Time Tuition (per credit): $141
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50 wow itfadeRight" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-tuition-item">
                <h5 className="it-tuition-title-sm">Graduate Programs</h5>
                <div className="it-tuition-list-box mb-35">
                  <span>Graduate School/Department</span>
                  <ul>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Full-Time Tuition (per semester): $241
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Part-Time Tuition (per credit): $141
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="it-tuition-list-box">
                  <span>Additional Fees</span>
                  <ul>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Technology Fee: $149 per semester
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16.5762C5.58634 16.5762 5.48163 16.4905 5.43976 16.3834C5.41885 16.3406 3.618 11.5862 0.833023 9.7873C0.288584 9.44465 -0.130124 9.08056 0.0373593 8.26673C0.204843 7.47435 0.728376 7.02461 1.67062 6.81044C3.34575 6.44635 5.14655 9.10194 5.81666 10.1942C8.16184 6.70341 12.8523 1.22086 19.6786 0.578388C20.0079 0.538906 20.1297 1.03815 19.8252 1.17804C19.7205 1.22086 9.96258 5.78255 6.00505 16.4049C5.94227 16.5119 5.83756 16.5762 5.71195 16.5762Z" fill="currentcolor" />
                        </svg>
                        Student Activity Fee: $99 per semester
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- tuition-area-end --> */}
    </>
  )
}
