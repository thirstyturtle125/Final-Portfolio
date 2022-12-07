function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-5">
            <h4 className="text-uppercase mb-4">Mailing Address</h4>
            <p className="lead mb-0 text-center">
              69 Brown Street, Box #5555
              <br />
              Providence, RI, USA 02912
            </p>
          </div>

          <i className="fas fa-water fa-3x mt-4" style={{ width: "54px" }}></i>

          <div className="col-lg-5 mb-5">
            <h4 className="text-uppercase mb-4">Social Handles</h4>
            <a
              className="btn btn-outline-light btn-social rounded-circle mx-1"
              href="#!"
            >
              <div className="mt-2">
                <i className="fab fa-fw fa-facebook-f"></i>
              </div>
            </a>
            <a
              className="btn btn-outline-light btn-social rounded-circle mx-1"
              href="#!"
            >
              <div className="mt-2">
                <i className="fab fa-fw fa-twitter"></i>
              </div>
            </a>
            <a
              className="btn btn-outline-light btn-social rounded-circle mx-1"
              href="#!"
            >
              <div className="mt-2">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </div>
            </a>
            <a
              className="btn btn-outline-light btn-social rounded-circle mx-1"
              href="#!"
            >
              <div className="mt-2">
                <i className="fab fa-fw fa-github"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
