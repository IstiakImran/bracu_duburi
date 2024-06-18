import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      <header className="about-header">
        <div className="about-banner">
          <div className="about-overlay-top"></div>
          <div className="about-content">
            <h1>About Us</h1>
          </div>
          <div className="about-overlay-bottom"></div>
        </div>
      </header>

      <section className="contents">
        <div className="about-section">
          <p>
            The BRACU Duburi team is committed to establishing a vibrant and
            inclusive community of AUV and ROV hobbyists and enthusiasts who
            will collaborate to develop cutting-edge, industrial-grade
            underwater vehicle. The team envisions fostering an environment
            where individuals can share their ideas, knowledge, and expertise to
            create innovative technologies that can revolutionize the underwater
            industry. Additionally, the team aspires to establish a
            state-of-the-art test facility that will enable the next generation
            of ROV enthusiasts to hone their skills and advance their knowledge
            in the field. Through these initiatives, the BRACU Duburi team aims
            to create a sustainable and innovative ecosystem that will drive the
            growth and development of the underwater industry in Bangladesh and
            beyond.
          </p>
        </div>
        <div className="competition-section">
          <h2>ROBOSUB Competition</h2>
          <p>
            2nd Place Overall (2023) Ingenuity Special Award (2023) Best Rookie
            Team (2022)
          </p>
          <p>
            Robosub is known as one of the most prestigious international
            student competitions of underwater robotics at present. Striding
            gloriously into its 26th year, this competition welcomes student
            teams from all over the world to showcase their innovation and
            brilliance in the field of robotics. The focus relies on the design
            and aboutlication of experimental Autonomous Underwater Vehicles (AUV)
            to solve engineering challenges. The functionality demonstrated by
            the experimental AUVs of the participating teams mimic those of
            real-world systems currently deployed globally for deep water
            exploration, seafloor mabouting, sonar localization, and many more.
          </p>
          <p>
            Bracu Duburi being one of those participating engineering teams,
            achieved the Outstanding Rookie Team recognition and was able to
            showcase their own innovative, affordable and sustainable aboutroach
            to intelligent AUVs on a global scale.
          </p>
        </div>
        <div className="competition-section">
          <h2>SAUVC Competition</h2>
          <p>7th Place Overall (2018)</p>
          <p>
            SAUVC is another substantially prominent and reputable international
            student competition for underwater robotics. This competition has
            been challenging student robotics enthusiasts from all around the
            globe with real-life engineering problems relating to Autonomous
            Underwater Vehicle systems. SAUVC provides a perfect platform for
            the participating teams to exhibit their innovation and brilliance
            in the related fields of mechanical, electrical, and software
            engineering.
          </p>
          <p>
            In SAUVC 2018, Bracu Duburi successfully managed to secure the 7th
            position, despite having little to no past experience, with their
            sheer determination and unwavering dedication to the art of
            underwater robotics. The team returned to SAUVC 2019 the next year
            to once again showcase their innovative aboutroach to sustainable AUVs
            design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
