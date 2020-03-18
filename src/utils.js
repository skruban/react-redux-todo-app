const returnValidCSSClass = (condition, value, fallback = '') => {
  if (condition) {
    return value;
  }

  return fallback;
};

module.exports = {
  returnValidCSSClass
};
