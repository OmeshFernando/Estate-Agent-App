// src/utils/searchUtils.js
export function matchesCriteria(property, criteria) {

  // criteria: { type, minPrice, maxPrice, minBeds, maxBeds, dateFrom, dateTo, postcode }
  
  if (criteria.type && criteria.type !== 'any' && property.type !== criteria.type) return false;
  if (criteria.minPrice != null && property.price < Number(criteria.minPrice)) return false;
  if (criteria.maxPrice != null && property.price > Number(criteria.maxPrice)) return false;
  if (criteria.minBeds != null && property.bedrooms < Number(criteria.minBeds)) return false;
  if (criteria.maxBeds != null && property.bedrooms > Number(criteria.maxBeds)) return false;
  if (criteria.postcode && criteria.postcode.trim() !== '') {
    // compare first part (case-insensitive)
    const area = property.postcode_area ? property.postcode_area.toLowerCase() : property.location.split(' ')[0].toLowerCase();
    if (!area.startsWith(criteria.postcode.trim().toLowerCase())) return false;
  }
  if (criteria.dateFrom) {
    const pDate = new Date(property.date_added);
    const from = new Date(criteria.dateFrom);
    if (pDate < from) return false;
  }
  if (criteria.dateTo) {
    const pDate = new Date(property.date_added);
    const to = new Date(criteria.dateTo);
    if (pDate > to) return false;
  }
  return true;
}

export function filterProperties(properties, criteria) {
  return properties.filter(p => matchesCriteria(p, criteria));
}
