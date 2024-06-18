import React from 'react';
import './TeamsHome.css';
// import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const TeamsHome = () => {
//   const history = useNavigate();

  const subTeams = [
    { name: 'Mechanical', link: '/team/mechanical' },
    { name: 'Electrical', link: '/team/electrical' },
    { name: 'Software', link: '/team/software' },
    { name: 'Operation', link: '/team/operation' },
  ];

  const teamLeads = [
    { name: 'Lead 1 Name', designation: 'Lead 1 Designation' },
    { name: 'Lead 2 Name', designation: 'Lead 2 Designation' },
  ];

  const handleSubTeamClick = (link) => {
    // history(link);
  };

  return (
    <div className="home-page">
      <h1>Our Team</h1>
      <div className="team-leads">
        {teamLeads.map((lead) => (
          <div key={lead.name} className="team-lead">
            <h3>{lead.name}</h3>
            <p>{lead.designation}</p>
          </div>
        ))}
      </div>
      <div className="sub-teams">
        {subTeams.map((subTeam) => (
          <div
            key={subTeam.name}
            className="sub-team"
            onClick={() => handleSubTeamClick(subTeam.link)}
          >
            {subTeam.name}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TeamsHome;
