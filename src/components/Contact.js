function Contact() {
  return (
    <section className="page-section bg-primary" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
          Contact Me
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line-white"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm">
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" />
                <label for="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" />
                <label for="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="text" />
                <label for="phone">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  style={{ height: "8rem" }}
                ></textarea>
                <label for="message">Message</label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-info btn-lg mt-4 text-white"
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
