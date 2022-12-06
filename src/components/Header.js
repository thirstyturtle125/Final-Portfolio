function Header() {
  return (
    <header class="header bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <img
          class="header-avatar mb-5"
          src="./assets/img/avatar.png"
          alt="..."
        />
        <h1 class="header-heading text-uppercase mb-0">thirstyturtle125</h1>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-droplet"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <p class="header-subheader font-weight-light mb-5">
          Computer Science @ Brown University
        </p>
      </div>
      {/* <!-- Spacer --> */}
      <div style={{ marginBottom: "5rem" }} />
    </header>
  );
}

export default Header;
