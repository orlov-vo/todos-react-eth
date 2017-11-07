import Moment from 'moment'

const userLocale =
  (window && window.navigator && (window.navigator.userLanguage || window.navigator.language)) ||
  'en'

Moment.locale(userLocale)
