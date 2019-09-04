import { request } from './request';
import { propertyTypes, dealTypes } from '../../components/SearchBar/searchParamsLists'

function parseSearchParams(params) {
  return Object.entries(params).reduce((finalString, currentParam) => {
    let [paramName, paramValue] = currentParam;
    switch (paramName) {
      case 'propertyType': paramValue = propertyTypes.find(type => type.text === paramValue).value; break;
      case 'dealType': paramValue = dealTypes.find(type => type.text === paramValue).value; break;
    }
    return paramValue
      ?`${finalString}&${paramName}=${typeof paramValue === 'string' ? paramValue.toLowerCase() : paramValue}`
      : finalString
  }, '?')
}

export function searchOffers(params) {
  console.log(parseSearchParams(params))

  return request.get(`/search?${parseSearchParams(params)}`)
}
