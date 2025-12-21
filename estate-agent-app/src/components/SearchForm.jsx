import React, { useState } from 'react';
import { filterProperties } from '../utils/searchUtils';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm({ properties, setResults }) {
  const [type, setType] = useState('any');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [maxBeds, setMaxBeds] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [postcode, setPostcode] = useState('');

  function onSearch(e) {
    e.preventDefault();
    const criteria = {
      type,
      minPrice: minPrice === '' ? null : minPrice,
      maxPrice: maxPrice === '' ? null : maxPrice,
      minBeds: minBeds === '' ? null : minBeds,
      maxBeds: maxBeds === '' ? null : maxBeds,
      dateFrom: dateFrom ? dateFrom.toISOString().slice(0,10) : null,
      dateTo: dateTo ? dateTo.toISOString().slice(0,10) : null,
      postcode
    };
    setResults(filterProperties(properties, criteria));
  }

  function onReset() {
    setType('any'); 
    setMinPrice(''); 
    setMaxPrice(''); 
    setMinBeds(''); 
    setMaxBeds(''); 
    setDateFrom(null); 
    setDateTo(null); 
    setPostcode('');
    setResults(properties);
  }

  return (
    <form className="search-form" onSubmit={onSearch}>
      <div className="form-row">
        <label>Type
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </label>

        <label>Min Price
          <input type="number" value={minPrice} onChange={e=>setMinPrice(e.target.value)} placeholder="e.g. 200000"/>
        </label>

        <label>Max Price
          <input type="number" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} placeholder="e.g. 500000"/>
        </label>

        <label>Min Beds
          <input type="number" value={minBeds} onChange={e=>setMinBeds(e.target.value)} min="0"/>
        </label>

        <label>Max Beds
          <input type="number" value={maxBeds} onChange={e=>setMaxBeds(e.target.value)} min="0"/>
        </label>
      </div>

      <div className="form-row">
        <label>Date From
          <DatePicker selected={dateFrom} onChange={date=>setDateFrom(date)} dateFormat="yyyy-MM-dd" isClearable/>
        </label>
        <label>Date To
          <DatePicker selected={dateTo} onChange={date=>setDateTo(date)} dateFormat="yyyy-MM-dd" isClearable/>
        </label>
        <label>Postcode area
          <input value={postcode} onChange={e=>setPostcode(e.target.value)} placeholder="e.g. NW1"/>
        </label>
      </div>

      <div className="form-row actions">
        <button type="submit">Search</button>
        <button type="button" onClick={onReset}>Reset</button>
      </div>
    </form>
  );
}
