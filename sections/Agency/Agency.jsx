export const Agency = ({ title, subtitle, image }) => {
  return (
    // Agency Section
    <section id="agency__selection" className="agency__selection">
      {/* Section Title */}
      <h1 className="section__title">{title}</h1>
      {/* Section Subtitle */}
      <h2 className="section__subtitle">{subtitle}</h2>
      {/* Img + Cards Container */}
      <div className="container">
        {/* Img Container */}
        <figure className="img__container"></figure>
        {/* Cards Container */}
        <div className="cards">
          {/* Card[1] */}
          <div className="card">
            <div className="icon__container">Icon</div>
            <div className="text">
              <h2 className="card__title">Brief</h2>
              <p className="card__para">Complete <b>brief writing or
                simple guidance</b> on what to include, we've got you covered</p>
            </div>
          </div>

          {/* Card[2] */}
          <div className="card">
            <div className="icon__container">Icon</div>
            <div className="text">
              <h2 className="card__title">Search</h2>
              <p className="card__para">In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.
              </p>
            </div>
          </div>

          {/* Card[3] */}
          <div className="card">
            <div className="icon__container">Icon</div>
            <div className="text">
              <h2 className="card__title">Pitch</h2>
              <p className="card__para">Comprehensive <b>pitch management,</b> including comms, diary management and pitch hosting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
