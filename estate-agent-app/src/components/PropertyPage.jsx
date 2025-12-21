import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from './Gallery';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function PropertyPage({ properties, addFavourite }) {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  if (!property) return <p>Property not found</p>;

  return (
    <main className="property-page">
      <h1>{property.title}</h1>
      <p className="price">£{property.price.toLocaleString()}</p>
      <Gallery images={property.images}/>
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.long_description}</p>
        </TabPanel>
        <TabPanel>
          <p>{property.floorplan}</p>
        </TabPanel>
        <TabPanel>
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
            style={{ width: '100%', height: 300, border: 0 }}
          ></iframe>
        </TabPanel>
      </Tabs>
      <button onClick={() => addFavourite(property)}>Add to favourites</button>
    </main>
  )
}
