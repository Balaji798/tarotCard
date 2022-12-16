import { Alert } from 'react-native';
import ApiService from '../../services/api/ApiService';
import rangeImgFilter from '../../utils/voucherRangeImageFilter';

export const updateVouchers = (dispatch, vouchers) => {
	return dispatch({ type: 'UPDATE_VOUCHERS', payload: vouchers });
};
