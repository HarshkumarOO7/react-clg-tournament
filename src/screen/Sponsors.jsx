import "./Sponsors.css";

export default function Sponsors() {
  const sponsors = [
    { name: "Myob", img: "/sponsors/myob.png" },
    { name: "Belimo", img: "/sponsors/belimo.png" },
    { name: "LifeGroups", img: "/sponsors/lifegroups.png" },
    { name: "Grabyo", img: "/sponsors/grabyo.png" },
    { name: "Citrus", img: "/sponsors/citrus.png" },
    { name: "Trustly", img: "/sponsors/trustly.png" },
    { name: "Oldendorff", img: "/sponsors/oldendorff.png" },
    { name: "Lilly", img: "/sponsors/lilly.png" },
  ];

  return (
    <section className="sponsors-section">
      {/* HEADER */}
      <div className="sponsors-header">
        <h2>Our Sponsors</h2>
        <div className="underline"></div>
        <p>
          We are proud to be supported by industry‑leading brands and
          organizations.
        </p>
      </div>

      {/* GRID */}
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-box" key={index}>
            <img src={sponsor.img} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
