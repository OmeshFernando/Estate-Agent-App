import React, { useState } from 'react';

export default function TabsSection({ property }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className="tabs-section">
      
      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>

        <button
          className={activeTab === 'floorplan' ? 'active' : ''}
          onClick={() => setActiveTab('floorplan')}
        >
          Floor Plan
        </button>

        <button
          className={activeTab === 'map' ? 'active' : ''}
          onClick={() => setActiveTab('map')}
        >
          Map
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">

        {activeTab === 'description' && (
          <p>{property.description}</p>
        )}

        {activeTab === 'floorplan' && (
          <img
            src={property.floorPlan}
            alt="Floor plan"
            className="floorplan-image"
          />
        )}

        {activeTab === 'map' && (
          <iframe
            title="Property location"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
          />
        )}

      </div>
    </section>
  );
}
