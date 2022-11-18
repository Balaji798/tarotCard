import {  ActivityIndicator,Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { MyText } from './MyDesign';

const BottomButton = (props) => {
	const [loading, setLoading] = React.useState(false);

	return (
		<>
			{props.upperText}
			<TouchableOpacity
				disabled={props.disabled || props.loading || loading}
				// onPress={props.onPress}
				onPress={() => {
					setLoading(true);
					Promise.resolve(props.onPress()).then(() => {
						setLoading(false);
					});
				}}
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',

					paddingVertical: 16,

					borderRadius: 32,

					backgroundColor: props.disabled ? (props.backgroundColorWhenDisabled ? props.backgroundColorWhenDisabled : '#F2F2F2') : '#2D9140',
					...props.style,
				}}>
				{props.loading || loading ? (
					<ActivityIndicator size="small" color="white" />
				) : (
					<Text
						bold
						style={{
							color: props.disabled ? 'grey' : 'white',
							letterSpacing: 1,
							fontSize: props.fontSize || 'mlg',
						}}>
						{props.title}
					</Text>
				)}
			</TouchableOpacity>
		</>
	);
};

export default BottomButton;