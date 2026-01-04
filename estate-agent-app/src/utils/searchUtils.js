/**
 * Filters properties based on search criteria
 * @param {Array} properties - array of property objects
 * @param {Object} criteria - search criteria
 * @returns {Array} filtered properties
 */
export function filterProperties(properties, criteria) {
  return properties.filter(property => {

    // Property type (House / Flat / Bungalow / Any)
    if (
      criteria.type &&
      criteria.type !== 'any' &&
      property.type.toLowerCase() !== criteria.type.toLowerCase()
    ) {
      return false;
    }

    // Minimum bedrooms
    if (
      criteria.minBeds !== null &&
      property.bedrooms < criteria.minBeds
    ) {
      return false;
    }

    // Maximum bedrooms
    if (
      criteria.maxBeds !== null &&
      property.bedrooms > criteria.maxBeds
    ) {
      return false;
    }

    // Minimum price
    if (
      criteria.minPrice !== null &&
      property.price < criteria.minPrice
    ) {
      return false;
    }

    // Maximum price
    if (
      criteria.maxPrice !== null &&
      property.price > criteria.maxPrice
    ) {
      return false;
    }

    // Date added (FROM)
    if (criteria.dateFrom) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (propertyDate < new Date(criteria.dateFrom)) {
        return false;
      }
    }

    // Date added (TO)
    if (criteria.dateTo) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (propertyDate > new Date(criteria.dateTo)) {
        return false;
      }
    }

    // Location / postcode search (partial match)
    if (criteria.postcode && !property.location.toLowerCase().includes(criteria.postcode.toLowerCase())) 
      return false;

    // If all checks pass, include property
    return true;
  });
}
