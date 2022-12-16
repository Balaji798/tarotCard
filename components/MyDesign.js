import React from 'react';
import { Text, Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const fontSize = {
	xs: Math.floor(windowWidth / 50),
	sm: Math.floor(windowWidth / 40),
	xsm: Math.floor(windowWidth / 32),
	smd: Math.floor(windowWidth / 30),
	md: Math.floor(windowWidth / 27),
	mlg: Math.floor(windowWidth / 24),
	xmlg: Math.floor(windowWidth / 23),
	xlm: Math.floor(windowWidth / 21),
	lg: Math.floor(windowWidth / 20),
	xlg: Math.floor(windowWidth / 18),
	xl: Math.floor(windowWidth / 14),
	xxl: Math.floor(windowWidth / 9),
	default: Math.floor(windowWidth / 35),
};

export const MyText = props => {
	// windowWidth < 400 ? fontSizeForSmallSize : (windowWidth < 450 ? fontSizeForMiddleSize :
	const font_size = fontSize;

	const fs = (font_size[props?.style?.fontSize] || font_size.default) * (props.scale || 1);

	return (
		<Text
			style={{
				...props.style,
				color: props.style?.color || '#181818',
				// fontWeight: props.bold ? 'bold' : 'normal',
				fontFamily: props.style?.fontFamily
					? props.style?.fontFamily
					: props.bold
					? 'Gotham-Bold'
					: 'Gotham-Book',
				// fontSize : props.notDynamic ? props.style?.fontSize : (fontType == "small") ? ((props.style?.fontSize || 14) - 5) : (props.style?.fontSize || 14)
				fontSize: fs,
			}}
			ellipsizeMode={props.ellipsizeMode || 'tail'}
			numberOfLines={props.numberOfLines}
			fontWeight={props.fontWeight}
			{...props.textProps}>
			{props.children}
		</Text>
	);
};
