const getDuration = (value, unit = 'ms') => {
	switch (unit) {
		case 'ms':
		case 'milliseconds':
		case 'millisecond':
			return value;
		case 's':
		case 'sec':
		case 'seconds':
		case 'second':
			return value * 1000;
		case 'm':
		case 'min':
		case 'mins':
		case 'minute':
		case 'minutes':
			return value * 1000 * 60;
		case 'h':
		case 'hr':
		case 'hrs':
		case 'hour':
		case 'hours':
			return value * 1000 * 60 * 60;
		case 'd':
		case 'day':
		case 'days':
			return value * 1000 * 60 * 60 * 24;
		case 'w':
		case 'week':
		case 'weeks':
			return value * 1000 * 60 * 60 * 24 * 7;
		case 'mo':
		case 'month':
		case 'months':
			return value * 1000 * 60 * 60 * 24 * 30;
		case 'y':
		case 'yr':
		case 'yrs':
		case 'year':
		case 'years':
			return value * 1000 * 60 * 60 * 24 * 365;
		default:
			return value;
	}
};

const formatTimespan = (timespan=[0, 0], format=['h', 'm']) => {
	// based on the format, extract the relevant parts of the timespan
	const timeDur = format.reduce((acc, curr, i) => {
		return timespan[i] > 0 ? `${acc} ${timespan[i]} ${curr}${timespan[i] > 1 ? 's' : ''}` : acc;
	}, '');

	return timeDur;
}

export { getDuration, formatTimespan };
