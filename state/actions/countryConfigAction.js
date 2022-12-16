import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiService from '../../services/api/ApiService';

export const setCountryConfig = async (dispatch, countryIdentifier) => {
	try {
		await AsyncStorage.setItem('countryIdentifier', countryIdentifier);
		const config = await ApiService.fetchCountryConfiguration();
		return dispatch({ type: 'SET_COUNTRY_CONFIG', config: config.data });
	} catch (e) {
		throw e;
	}
};
