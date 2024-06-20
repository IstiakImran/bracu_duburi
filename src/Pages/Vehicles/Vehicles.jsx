import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Vehicles.css';
import { duburi_auv } from '../../assets/duburidata';

const data = duburi_auv;

const Vehicles = () => {
  const { model } = useParams();
  const navigate = useNavigate();
  const [selectedAUV, setSelectedAUV] = useState(model || 'Duburi 4.0');

  useEffect(() => {
    if (model) {
      setSelectedAUV(model);
    } else {
      navigate(`/vehicles/Duburi 4.0`);
    }
  }, [model, navigate]);

  const auvData = data[selectedAUV];

  const handleScrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleModelChange = (auv) => {
    setSelectedAUV(auv);
    navigate(`/vehicles/${auv}`);
  };

  return (
    <div className="duburi-auv-container">
      <nav className="nav-bar">
        {Object.keys(data).map((auv) => (
          <button
            key={auv}
            className={selectedAUV === auv ? 'active' : ''}
            onClick={() => handleModelChange(auv)}
          >
            {auv}
          </button>
        ))}
      </nav>
      <div className="contentss">
        <aside className="auv-sidebar">
          {auvData && Object.keys(auvData).map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
            >
              {section}
            </button>
          ))}
        </aside>
        <main className="auv-details">
          {auvData ? (
            Object.entries(auvData).map(([section, details]) => (
              <section key={section} id={section} className="auv-section">
                <h2>{section}</h2>
                {typeof details === 'string' ? (
                  <p>{details}</p>
                ) : (
                  <ul>
                    {Object.entries(details).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))
          ) : (
            <p>No data available for the selected AUV.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Vehicles;
