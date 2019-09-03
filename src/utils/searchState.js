const searchInitialState = (isHomePage) => {
  const lastSearchedUrl = localStorage.getItem('LAST_SEARCHED_URL')
  return isHomePage || !lastSearchedUrl ? {
      city: '',
      propertyType: 'apartment',
      dealType: 'rent',
      priceMin: 0,
      priceMax: 0,
  } : lastSearchedUrl;
};

export default searchInitialState;
