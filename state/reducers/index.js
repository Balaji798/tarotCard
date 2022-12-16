import { combineReducers } from 'redux';
import deviceNotificationReducer from './deviceNotificationReducer';
import contryConfigReducer from './contryConfigReducer';
import authReducer from './authReducer';
import vouchersReducer from './vouchersReducer';
import offlineReducer from './offlineReducer';
import popupReducer from './popupReducer';
import storeReducer, { flyerStoreReducer } from './storeReducer';

const reducers = combineReducers({
	deviceNotification: deviceNotificationReducer,
	countryConfig: contryConfigReducer,
	auth: authReducer,
	store: storeReducer,
	flyerStore: flyerStoreReducer,
	vouchers: vouchersReducer,
	offline: offlineReducer,
	popup: popupReducer,
});

export default reducers;
