const searchInitialState = (isHomePage) => {
  const lastSearchedUrl = localStorage.getItem('LAST_SEARCHED_URL')
  return isHomePage || !lastSearchedUrl ? {
      region: '',
      propertyType: 'Mieszkanie',
      dealType: 'Wynajem',
      'price-min': 0,
      'price-max': 0,
  } : lastSearchedUrl;
};

export default searchInitialState;
