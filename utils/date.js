// convert months from index to string
export const monthToString = (month) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[month];
};

export const getDateString = (timestamp) => {
	const date = new Date(timestamp);
	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();

	// convert month to short name
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dateString = `${day} ${monthNames[month]}, ${year}`;
	return timestamp ? dateString : '';
};

// new Date() to mm-dd-yyyy
export const getDateStringFromObject = (dateObj) => {
	const month = dateObj.getMonth() + 1;
	const day = dateObj.getDate();
	const year = dateObj.getFullYear();

	return `${month}-${day}-${year}`;
};

// get dateObject from mm-dd-yyyy
export const getDateObject = (dateString) => {
	if (typeof dateString === 'string') {
		const date = dateString.split('-');
		const month = date[0] - 1;
		const day = date[1];
		const year = date[2];
		return new Date(year, month, day);
	} else {
		return dateString;
	}
};
