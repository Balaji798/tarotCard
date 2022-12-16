import { countries } from 'countries-list';
import { getStates as getStatesOfCountry, getCountries } from 'country-state-picker';

const states = {
	AE: ['Ajman', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Umm Al Quwain'],
	IN: [
		'Andaman and Nicobar Islands',
		'Andhra Pradesh',
		'Arunachal Pradesh',
		'Assam',
		'Bihar',
		'Chandigarh',
		'Chhattisgarh',
		'Dadra and Nagar Haveli',
		'Daman and Diu',
		'Delhi',
		'Gujarat',
		'Goa',
		'Haryana',
		'Himachal Pradesh',
		'Jammu and Kashmir',
		'Jharkhand',
		'Karnataka',
		'Kerala',
		'Kolkata',
		'Ladhak',
		'Lakshadweep',
		'Madhya Pradesh',
		'Maharashtra',
		'Manipur',
		'Meghalaya',
		'Mizoram',
		'Nagaland',
		'Odisha',
		'Puducherry',
		'Punjab',
		'Rajasthan',
		'Sikkim',
		'Tamil Nadu',
		'Telangana',
		'Tripura',
		'Uttarakhand',
		'Uttar Pradesh',
		'West Bengal',
	],
};

export const getCountry = (code) => ({ ...countries[code], code, countryIdentifier: code });
// export const getAllCountryNames = () => Object.keys(countries)?.map((code) => countries[code].name);
export const getAllCountryNames = () => getCountries().map((country) => country.name);
// export const getStates = (name) => (name !== '' || name !== null || name !== undefined ? getStatesOfCountry(name?.toLowerCase()) : []);

export const getStates = (shortName) => {
	return states[shortName || 'IN'];
};
