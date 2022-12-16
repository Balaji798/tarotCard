import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MyText } from './MyDesign';

const BarShell = ({ style, text, color, setActive, active }) => {
	return (
		<TouchableOpacity
			onPress={() => setActive()}
			style={{
				flex: 1,
				backgroundColor: `${color} ${active ? '0.2 )' : ' 1 )'}`,
				paddingVertical: 10,
				justifyContent: 'center',
				alignItems: 'center',
				borderRightWidth: 0.3,
				borderRightColor: '#FFFFFF',
				...style,
			}}>
			<MyText style={{ color: active ? '#181818' : 'white' }} bold>
				{text}
			</MyText>
		</TouchableOpacity>
	);
};

const NPSRatingBar = ({ navigation, answer, setAnswer }) => {
	return (
		<>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<MyText>Very Unlikely</MyText>
				<MyText>Very Likely</MyText>
			</View>

			<View style={{ flexDirection: 'row', marginTop: 10 }}>
				{[...Array(10).keys()].map((i) => (
					<BarShell
						key={i}
						text={i + 1}
						active={answer === i + 1}
						setActive={() => setAnswer(i + 1)}
						style={{
							borderBottomLeftRadius: i === 0 ? 8 : 0,
							borderTopLeftRadius: i === 0 ? 8 : 0,
							borderBottomRightRadius: i === 9 ? 8 : 0,
							borderTopRightRadius: i === 9 ? 8 : 0,
						}}
						color={i <= 5 ? 'rgba(214, 39, 37,' : i <= 7 ? 'rgba(253,198,25,' : 'rgba(0, 164, 110,'}
					/>
				))}
			</View>
		</>
	);
};

export default NPSRatingBar;
