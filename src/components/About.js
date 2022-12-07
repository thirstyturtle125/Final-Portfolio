function About() {
  return (
    <section className="page-section text-dark mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-dark">
          About
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line-dark"></div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-3 ms-auto mx-3">
            <img class="about-wave" src={"./assets/img/waves.png"} alt="..." />
          </div>
          <div className="col-sm-4 me-auto">
            <p className="lead">Hi there, I'm thirstyturtle125!</p>
            <p className="lead">
              I'm an anonymous senior at Brown University studying Computer
              Science, and I'm originally from Salt Lake City, Utah. I'm
              interested in Machine Learning, Computer Vision, and
              Entrepreneurship.
            </p>
            <p className="lead">
              I have some experience as a SWE intern at the places to the right.
            </p>
            <p className="lead">
              When I'm not tinkering around you can usually find me learning to
              play a new song on my guitar, cooking, or listening to music. Look
              below to see more of my work and connect with me!
            </p>
          </div>
          <div
            className="col-sm-1 me-auto justify-content-center"
            style={{ marginLeft: "-4rem" }}
          >
            <img
              src="./assets/img/samsara.png"
              alt="Samsara"
              style={{ width: "12rem" }}
            ></img>
            <img
              src="./assets/img/amazon.png"
              alt="Samsara"
              style={{
                width: "12rem",
                marginTop: "1rem",
              }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
