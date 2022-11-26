export enum AppRoute {
  Main = '/',
  Login = '/login',
  OfferCard = '/offer/:id'
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const PropertiesMap = {
  Main: {
    className: 'cities__map',
    height: '980px'
  },
  OfferCard: {
    className: 'property__map',
    height: '579px'
  }
};

export const StyleOfferCard = {
  CityOffer: {
    classArticle: 'cities__card',
    classImageWrapper: 'cities__image-wrapper'
  },
  NearOffer: {
    classArticle: 'near-places__card',
    classImageWrapper: 'near-places__image-wrapper'
  }
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];
