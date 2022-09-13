import {createGlobalStyle} from 'styled-components';

import Courier from './CourierPrime.ttf';
import Kaushan from './KaushanScript.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Courier';
    src: local('Courier'),
    url(${Courier}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Kaushan';
    src: local('Kaushan'),
    url(${Kaushan}) format('truetype');
    font-style: normal;
  }
`;