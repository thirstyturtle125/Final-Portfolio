function Projects() {
  return (
    <>
      <section className="page-section bg-primary projects" id="projects">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Projects
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line-white"></div>
          </div>
          {/* <!--grid--> */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="projects-item mx-auto d-flex align-items-center justify-content-center bg-warning"
                data-bs-toggle="modal"
                data-bs-target="#projectsModal1"
              >
                <div className="projects-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="projects-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={"./assets/img/candy.png"}
                  style={{ height: "300px" }}
                  alt="..."
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="projects-item mx-auto d-flex align-items-center justify-content-center bg-danger"
                data-bs-toggle="modal"
                data-bs-target="#projectsModal2"
              >
                <div className="projects-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="projects-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={"./assets/img/iterative.png"}
                  style={{ height: "300px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="projects-item mx-auto d-flex align-items-center justify-content-center bg-white"
                data-bs-toggle="modal"
                data-bs-target="#projectsModal3"
              >
                <div className="projects-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="projects-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={"./assets/img/redesign.png"}
                  style={{ height: "300px" }}
                  alt="..."
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div
                className="projects-item mx-auto d-flex align-items-center justify-content-center bg-success"
                data-bs-toggle="modal"
                data-bs-target="#projectsModal4"
              >
                <div className="projects-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="projects-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={"./assets/img/persona.png"}
                  style={{ height: "300px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Project Modals--> */}
      <div
        className="projects-modal modal fade"
        id="projectsModal1"
        aria-labelledby="projectsModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="projects-modal-title text-dark text-uppercase mb-0">
                      Development
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line-dark"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-4"
                      src={"./assets/img/dev.png"}
                      style={{ height: "250px" }}
                      alt="..."
                    />
                    <p>
                      In this project, I had a chance to develop an interactive
                      interface, with inteface components, in conjunction with
                      an internal data state. This entirely dynamic React webapp
                      is an emulation of a nutrional calculator for the 15 most
                      popular candies in the United States.
                    </p>
                    <p>
                      Users can browse through a list of these candies and add
                      them to the aggregating calculator to see how many
                      calories, sugar, and saturated fat they are consuming.
                      Adding, removing, filtering, and sorting can be done in
                      real-time and there is no need to refresh the page while
                      doing so.
                    </p>
                    <div className="d-flex justify-content-center gap-5">
                      <a
                        href="https://thirstyturtle125.github.io/Development/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          Go to Project
                        </button>
                      </a>
                      <a
                        href="https://github.com/thirstyturtle125/Development"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          <i
                            className="fab fa-fw fa-github"
                            style={{ marginRight: "5px" }}
                          ></i>
                          See Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects-modal modal fade"
        id="projectsModal2"
        aria-labelledby="projectsModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="projects-modal-title text-dark text-uppercase mb-0">
                      Iterative Design
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line-dark"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-4"
                      src={"./assets/img/slai.png"}
                      style={{ height: "250px" }}
                      alt="..."
                    />
                    <p>
                      For this project my team observed Slai, a startup
                      dedicated to making it easy to build, run, and ship ML
                      apps to production. From our observations, we then went on
                      to design an interactive interface for thier concept.
                    </p>
                    <p>
                      Through several iterative processes and critiques, my
                      group was able to mock up several different solutions to
                      the problem that this early-stage startup is trying to
                      solve.
                    </p>
                    <div className="d-flex justify-content-center gap-5">
                      <a
                        href="https://thirstyturtle125.github.io/Iterative-Design/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          Go to Project
                        </button>
                      </a>
                      <a
                        href="https://github.com/thirstyturtle125/Iterative-Design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          <i
                            className="fab fa-fw fa-github"
                            style={{ marginRight: "5px" }}
                          ></i>
                          See Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects-modal modal fade"
        id="projectsModal3"
        aria-labelledby="projectsModal3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="projects-modal-title text-dark text-uppercase mb-0">
                      Responsive Redesign
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line-dark"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-4"
                      src={"./assets/img/berk.png"}
                      style={{ height: "250px" }}
                      alt="..."
                    />
                    <p>
                      In this project, I took a look at the Berkshire Hathaway
                      website and was grossly offended. I then practiced the
                      workflow of redesigning a simple website, analyzing and
                      identifying the flaws that made the website so bad in the
                      candy place.
                    </p>
                    <p>
                      By creating low-fidelity and high-fidelity prototypes and
                      making use of design principles, I carefully created a
                      much more aesthetic interface that was also comfortably
                      responsive.
                    </p>
                    <div className="d-flex justify-content-center gap-5">
                      <a
                        href="https://thirstyturtle125.github.io/Responsive-Redesign/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          Go to Project
                        </button>
                      </a>
                      <a
                        href="https://github.com/thirstyturtle125/BerkHath"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          <i
                            className="fab fa-fw fa-github"
                            style={{ marginRight: "5px" }}
                          ></i>
                          See Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects-modal modal fade"
        id="projectsModal4"
        aria-labelledby="projectsModal4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="projects-modal-title text-dark text-uppercase mb-0">
                      Personas & Storyboarding
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line-dark"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-4"
                      src={"./assets/img/personas.png"}
                      style={{ height: "250px" }}
                      alt="..."
                    />
                    <p>
                      I observed and interviewed people regarding the Amazon
                      Locker interface, getting into the contextual details of
                      the interface itself. From my interviews and questioning,
                      I was able to determine the shortcomings in accessiblity
                      that Amazon had not considered when designing their Locker
                      interface.
                    </p>
                    <p>
                      As a result, I was able to create two user personas that
                      clearly identified necessary steps to take in future
                      iterations of the interface's design.
                    </p>
                    <div className="d-flex justify-content-center gap-5">
                      <a
                        href="https://thirstyturtle125.github.io/Personas-Storyboarding/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          Go to Project
                        </button>
                      </a>
                      <a
                        href="https://github.com/thirstyturtle125/Personas-Storyboarding"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">
                          <i
                            className="fab fa-fw fa-github"
                            style={{ marginRight: "5px" }}
                          ></i>
                          See Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
