import I18n from 'react-native-i18n';

import pt from './locales/pt';
import en from './locales/en';

I18n.fallbacks = true;

I18n.translations = {
  pt,
  en
};
 
export default I18n;
