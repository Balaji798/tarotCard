import React, { useState } from 'react';
import { Platform, View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Overlay } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

// import { MyText } from './MyDesign';

import { getDateStringFromObject, monthToString } from '../utils/date';

export  const MyDateTimePicker = ({ value, setValue, ...props }) => {
	const [show, setShow] = useState(false);
	const prevValue = value;

	let savedDate = value;
	let savedDateString;
	if (!value) savedDateString = '';
	else
		savedDateString = `${savedDate?.getDate()} ${monthToString(savedDate?.getMonth())} ${savedDate?.getFullYear()}`;

	return (
		<TouchableOpacity onPress={() => setShow(true)} style={{ ...props.style }}>
			{props.title && (
				<View style={{ marginBottom: 10 }}>
					<Text style={{ color: props.error ? 'rgba(201,23,19,0.9)' : '#747474', fontSize: 'smd' }}>
						{props.title}
					</Text>
				</View>
			)}
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',

					height: 48,
					paddingVertical: 10,
					paddingHorizontal: 16,

					borderColor: props.noBorderColorChange
						? '#D1D1D1'
						: props.error
						? 'rgba(201,23,19,0.9)'
						: props.borderColor || '#D1D1D1',
					borderWidth: 1,
					borderRadius: 5,
				}}>
				<Text style={{ fontSize: 'mlg', color: savedDateString ? '#181818' : '#A3A3A3' }}>
					{savedDateString || 'Select Your Date of Birth'}
				</Text>
				<Feather name="calendar" size={24} color="#D1D1D1" />
			</View>
			{Platform.OS === 'ios' ? (
				<Overlay
					isVisible={show}
					onBackdropPress={() => setShow(false)}
					overlayStyle={{
						flex: 1,
						width: '100%',
						justifyContent: 'center',

						backgroundColor: '#00000066',

						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
					}}>
					<View style={{ borderRadius: 10, overflow: 'hidden' }}>
						<DateTimePicker
							testID="dateTimePicker"
							value={value || new Date()}
							display="spinner"
							style={{ backgroundColor: 'white' }}
							textColor="#181818"
							onChange={(e, date) => {
								if (date) setValue(getDateStringFromObject(date));
							}}
						/>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',

								height: 50,
								backgroundColor: 'white',

								borderColor: '#CDCDCD',
								borderTopWidth: 1,
							}}>
							<TouchableOpacity
								onPress={() => {
									setValue(getDateStringFromObject(prevValue));
									setShow(false);
								}}>
								<Text style={{ paddingHorizontal: 16, fontSize: 'md' }}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									setValue(getDateStringFromObject(value || new Date()));
									setShow(false);
								}}>
								<Text style={{ paddingHorizontal: 16, color: 'green', fontSize: 'md' }}>Done</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Overlay>
			) : (
				show && (
					<DateTimePicker
						testID="dateTimePicker"
						value={value || new Date()}
						style={{ backgroundColor: 'red' }}
						onChange={(e, date) => {
							setShow(false);
							if (date) setValue(getDateStringFromObject(date));
						}}
					/>
				)
			)}
		</TouchableOpacity>
	);
};

// export default MyDateTimePicker;
