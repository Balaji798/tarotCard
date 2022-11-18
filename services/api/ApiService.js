import Api from './Api';
import staticResponses from './StaticApiService';
console.log({ ...staticResponses });

export default false
	? { ...staticResponses }
	: {
			// Notification and Platform API
			// registerPlatformDevice: (os, version, unique_id, name, locale, country, notification_token) =>
			// 	Api.post('register-platform-and-device/', {
			// 		os,
			// 		version,
			// 		unique_id,
			// 		name,
			// 		locale,
			// 		country,
			// 		notification_token,
			// 	}),
			// product apis 
			getProduct:()=>Api.get("product/get_products"),
			sendLoginOTP: (phone) =>Api.post(`user/otp_mobile`, { phone }),
	  };
