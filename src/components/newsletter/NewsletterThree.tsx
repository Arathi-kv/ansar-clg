interface NewsletterThreeProps {
  style_2?: boolean;
}

export default function NewsletterThree({ style_2 }: NewsletterThreeProps) {
  return (
    <>
      {/* <!-- Location Map Start --> */}
     <div className="it-newsletter-area pb-150">
  <div className="container">
    <div
      className="wow itfadeUp overflow-hidden"
      data-wow-duration=".9s"
      data-wow-delay=".3s"
      style={{ borderRadius: "20px" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15682.894434863389!2d76.1203977!3d10.6785485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7bde00195bd7d%3A0xa3079e16df93d5ee!2sAnsar%20College%20(SAFA)%2C%20Uppungal%20Road%2C%20near%20KSEB%2C%20Punnayurkulam%2C%20Kerala%20679561!3m2!1d10.6835495!2d75.9926905!5e0!3m2!1sen!2sin!4v1784989204736!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Ansar College Location"
      />
    </div>
  </div>
</div>
      {/* <!-- Location Map End --> */}
    </>
  );
}