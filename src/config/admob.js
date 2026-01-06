import Constants from 'expo-constants';

const isDev = __DEV__;

/**
 * IDs DE PRUEBA OFICIALES DE GOOGLE
 */
const TEST_BANNER_ID = 'ca-app-pub-3940256099942544/6300978111';

export const BannerAdUnitId = isDev
  ? TEST_BANNER_ID
  : Constants.expoConfig.extra.admob.bannerAddTransaction;
