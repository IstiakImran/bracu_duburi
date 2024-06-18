import React, { useState } from 'react';
import './RoboSub.css';

const RoboSub = () => {
  const [year, setYear] = useState(2023);

  const data = {
    2023: {
      title: "BRACU DUBURI IS PARTICIPATING IN ROBOSUB 2023",
      description: `This year, BRACU released version 4.0. Duburi has significantly enhanced its functionality and modified its system architecture in response to the lessons learned from RoboSub 2022. The new AUV’s construction, which promises to offer more underwater agility, is among the significant modifications. By eliminating extra space, the new design reduces weight and is more hydrodynamic than the previous one. Additionally, Duburi now has a Vectornav VN200 INS in place of its previous magnetic field-dependent IMU, which supplied inaccurate data in the event of any magnetic interference. This INS calculates its heading using data from the gyroscope and accelerometer. Due to Duburi’s focus on modular hardware and software this year, ROS (Robot Operating System) now powers Duburi. A hot-swappable system and cleaner, better organized wiring are additional features of the newly created rover, which also includes quick maintenance options. The design, as a whole, effectively and quickly corrects all of the preceding flaws.`,
      mechanical: {
        description: `Our hull design consists of three primary elements: an external aluminum, an internal acrylic frame and a water-proof enclosure. For the version Duburi 4.0, the team has changed the main hull into a 16x12x6 inches octagon with curved edges. The octagonal shape distributes stress evenly across the structure, hence the rover will not experience any localized pressure while submerged underwater. Furthermore, this new dimension has led to a substantial decrease in weight of the AUV and a volume reduction of approximately 60 percent. The weight reduction minimizes thruster pressure, and a smaller dimension decreases surface area leading to a lower impact of drag force. As a result, mobility increases and acceleration becomes easier....`,
        image: 'path/to/mechanical2023.jpg',
      },
      electrical: {
        description: `We have used 2 LiPo Battey in our rover, One of them is a 12.6V 5400 mAh 3 Cell battery and another one is a 12.6V 5200 mAh 3 Cell battery. We are using one of our batteries to power T200 Thrusters ESC. In this part, we are directly using full battery voltage without using any buck module, From Battery to the Thruster power connection we have implemented our DIY underwater switch, which can kill the thruster power in case of Emergency....`,
        image: 'path/to/electrical2023.jpg',
      },
      software: {
        description: `Duburi's Computer Vision subteam is in charge. Its job is to choose, train, and test Duburi's Machine Learning Algorithms for identifying objects underwater, which is an important aspect of Duburi's autonomous operation.`,
        image: 'path/to/software2023.jpg',
      },
      headerImage: 'path/to/header2023.jpg',
    },
    2022: {
      title: "BRACU DUBURI IS PARTICIPATING IN ROBOSUB 2022",
      description: `Our strategy for participating in RobotSub for the first time is "basics first; software over hardware." BRACU Duburi's broad plan for RoboSub 2022 is to focus on executing the most basic activities first with a simple design; only after refining the basics have we added additional functionality (and complexity) to our designs to enable it to complete the more sophisticated duties of the RoboSub course. Furthermore, we overcome our material and logistics constraints by selecting only the bare minimum of gear. To make up for that, we've spent a lot of effort and time into developing a solid computer vision and software control system.`,
      mechanical: {
        description: `Duburi’s is designed in a manner that should allow it to withstand the pressures of 3 bars. Thus, the material chosen needs to have a very low weight-to-strength ratio to ensure that the AUV would be buoyant and have a max acceleration sufficient for covering large search areas. 5083 marine-grade Aluminum was thus chosen over alternatives such as acrylic and plastic. This material has the additional benefit of being sufficiently corrosion-resistant (even in salt-water environments), highly thermally conductive, widely available, and relatively easy to fabricate.`,
        image: 'path/to/mechanical2022.jpg',
      },
      electrical: {
        description: `Duburi has its custom designed PCB that relays and connects all the sensors and electrical components keeping in component failures in mind. In order to swap sensors in case of failure. Apart from that also does not contain unnecessarily wiring.`,
        image: 'path/to/electrical2022.jpg',
      },
      software: {
        description: `Duburi's Computer Vision subteam is in charge. Its job is to choose, train, and test Duburi's Machine Learning Algorithms for identifying objects underwater, which is an important aspect of Duburi's autonomous operation.`,
        image: 'path/to/software2022.jpg',
      },
      headerImage: 'path/to/header2022.jpg',
    },
  };

  return (
    <div className="robosub-container">
      <div className="sidebar">
        <button onClick={() => setYear(2023)}>2023</button>
        <button onClick={() => setYear(2022)}>2022</button>
      </div>
      <div className="contentts">
        <img src={data[year].headerImage} alt={`Header ${year}`} className="header-image" />
        <h1>{data[year].title}</h1>
        <p>{data[year].description}</p>
        <h2>Mechanical System</h2>
        <p>{data[year].mechanical.description}</p>
        <img src={data[year].mechanical.image} alt={`Mechanical ${year}`} className="section-image" />
        <h2>Electrical Architecture</h2>
        <p>{data[year].electrical.description}</p>
        <img src={data[year].electrical.image} alt={`Electrical ${year}`} className="section-image" />
        <h2>Software Architecture</h2>
        <p>{data[year].software.description}</p>
        <img src={data[year].software.image} alt={`Software ${year}`} className="section-image" />
      </div>
    </div>
  );
};

export default RoboSub;
