function About() {
  return (
    <section className="page-section text-dark mb-0" id="about">
      <div className="container mt-5">
        <h2 className="page-section-heading text-center text-uppercase text-dark">
          About
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line-dark"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">Hi there, I'm thirstyturtle125!</p>
            <img class="about-wave" src={"./assets/img/waves.png"} alt="..." />
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              I'm an anonymous senior at Brown University studying Computer
              Science. I'm originally from my hometown of Salt Lake City, Utah.
              I'm incredibly interested in Machine Learning, Computer Vision,
              and Entrepreneurship. I've been lucky enough to intern at both
              Amazon (AWS) and Samsara as a Software Engineer Intern. When I'm
              not tinkering around you can usually find me learning to play a
              new song on my guitar, cooking, or listening to music. Look below
              to see more of my work and connect with me!
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Spacer --> */}
      <div style={{ marginBottom: "8rem" }} />
    </section>
  );
}

export default About;
