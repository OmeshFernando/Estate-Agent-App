/**
 * Filters properties based on search criteria
 * @param {Array} properties - array of property objects
 * @param {Object} criteria - search criteria
 * @returns {Array} filtered properties
 */
export function filterProperties(properties, criteria) {
  return properties.filter(property => {

    // 1️⃣ Property type (House / Flat / Bungalow / Any)
    if (
      criteria.type &&
      criteria.type !== 'any' &&
      property.type.toLowerCase() !== criteria.type.toLowerCase()
    ) {
      return false;
    }

    // 2️⃣ Minimum bedrooms
    if (
      criteria.minBeds !== null &&
      property.bedrooms < criteria.minBeds
    ) {
      return false;
    }

    // 3️⃣ Maximum bedrooms
    if (
      criteria.maxBeds !== null &&
      property.bedrooms > criteria.maxBeds
    ) {
      return false;
    }

    // 4️⃣ Minimum price
    if (
      criteria.minPrice !== null &&
      property.price < criteria.minPrice
    ) {
      return false;
    }

    // 5️⃣ Maximum price
    if (
      criteria.maxPrice !== null &&
      property.price > criteria.maxPrice
    ) {
      return false;
    }

    // 6️⃣ Date added (FROM)
    if (criteria.dateFrom) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (propertyDate < new Date(criteria.dateFrom)) {
        return false;
      }
    }

    // 7️⃣ Date added (TO)
    if (criteria.dateTo) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (propertyDate > new Date(criteria.dateTo)) {
        return false;
      }
    }

    // 8️⃣ Location / postcode search (partial match)
    if (
      criteria.location &&
      !property.location.toLowerCase().includes(criteria.location.toLowerCase())
    ) {
      return false;
    }

    // If all checks pass, include property
    return true;
  });
}
