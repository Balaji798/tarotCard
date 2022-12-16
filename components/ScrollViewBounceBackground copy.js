import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScrollViewBounceBackground = () => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={{
				position: 'absolute',
				top: insets.top,
				left: 0,
				right: 0,
				bottom: 0,
				width: '100%',
				height: '100%',
				zIndex: -1, // appear under the scrollview
			}}>
			<View style={{ flex: 1, backgroundColor: '#191C27' }} />
			<View style={{ flex: 1, backgroundColor: 'white' }} />
		</View>
	);
};

export default ScrollViewBounceBackground;

const styles = StyleSheet.create({});
