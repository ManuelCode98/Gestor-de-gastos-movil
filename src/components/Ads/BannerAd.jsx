import { View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';
import { BannerAdUnitId } from '../../config/admob';

const BannerAdComp = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <BannerAd
        unitId={BannerAdUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

export default BannerAdComp;
