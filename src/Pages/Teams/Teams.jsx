import React, { useState } from 'react';
import './Teams.css';
import { teams } from '../../assets/teams';

const Teams = () => {
  const [selectedYear, setSelectedYear] = useState(teams[0].year);
  const [selectedDepartment, setSelectedDepartment] = useState('TeamLead');

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setSelectedDepartment('TeamLead');
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    const element = document.getElementById(department);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentTeam = teams.find(team => team.year === selectedYear);

  return (
    <div className="Teams">
      <header className="header">
        {teams.map(team => (
          <button
            key={team.year}
            onClick={() => handleYearClick(team.year)}
            className={selectedYear === team.year ? 'active' : ''}
          >
            {team.year}
          </button>
        ))}
      </header>
      <div className="contentt">
        <nav className="sidebar">
          {Object.keys(currentTeam.departments).map(department => (
            <button
              key={department}
              onClick={() => handleDepartmentClick(department)}
              className={selectedDepartment === department ? 'active' : ''}
            >
              {department}
            </button>
          ))}
        </nav>
        <main className="main">
          {Object.entries(currentTeam.departments).map(([department, members]) => (
            <section key={department} id={department} className="department">
              <h2>{department}</h2>
              <div className="members">
                {members.map((member, index) => (
                  <div key={index} className="member">
                    <img src={member.image} alt={member.name} />
                    <div className="info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Teams;
