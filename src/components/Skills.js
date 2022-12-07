function Skills() {
  return (
    <section className="page-section" id="skills">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-dark mb-0">
          Skills
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line-dark"></div>
        </div>
        <div
          className="d-flex justify-content-center mt-5"
          style={{ gap: "10rem", marginRight: "3rem" }}
        >
          <h3>
            <u>Programming Languages</u>
          </h3>
          <h3 style={{ marginRight: "4rem" }}>
            <u>Frameworks & Libraries</u>
          </h3>
          <h3 style={{ marginRight: "3rem" }}>
            <u>Other Skills</u>
          </h3>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="projects-item mx-auto d-flex align-items-center justify-content-center rounded-5 bg-primary"
              style={{ height: "420px" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "2.5rem",
                  color: "white",
                }}
              >
                <li>Java</li>
                <li>Python</li>
                <li>GraphQL</li>
                <li>Go</li>
                <li>Swift</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="projects-item mx-auto d-flex align-items-center justify-content-center rounded-5 bg-primary"
              style={{ height: "420px" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "2.5rem",
                  color: "white",
                }}
              >
                <li>Selenium</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Google Cloud TTS API</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Firebase</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="projects-item mx-auto d-flex align-items-center justify-content-center rounded-5 bg-primary"
              style={{ height: "420px" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "2.5rem",
                  color: "white",
                }}
              >
                <li>Unity</li>
                <li>Git/Github</li>
                <li>Blender</li>
                <li>Photoshop</li>
                <li>Premiere</li>
                <li>After Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
