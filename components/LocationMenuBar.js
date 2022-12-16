import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MyText } from './MyDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationMenuBar = ({ theme, ...props }) => {
	// const store = useSelector((state) => state.store);

	return (
		<View
			style={{
				padding: 16,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: theme === 'light' ? 'white' : '#191C27',
			}}>
			<TouchableWithoutFeedback
				onPress={() => {
					// topMenuBarAnalytics('pick store click');
					props.navigation.push('Select Store', {
						goBack: true,
					});
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{/* <Image
						resizeMode="contain"
						source={require('../assets/icons/StoreIcons/storeMapIcon.png')}
						style={{
							width: Platform.OS === 'ios' ? 32 : 20,
							height: Platform.OS === 'ios' ? 32 : 28,
							marginRight: 4,
						}}
					/> */}
					<MyText style={{ fontSize: 'lg', color: theme === 'light' ? '#181818' : 'white', maxWidth: '80%' }} bold numberOfLines={1}>
						{/* {`${store ? store.name : 'INAAM Home'} `} */}
					</MyText>
					<View style={{ padding: 2, marginLeft: 8, borderColor: '#6B6D73', borderWidth: 1, borderRadius: 100 }}>
						<Entypo name="chevron-down" size={14} color={theme === 'light' ? '#6B6D73' : '#EFEFF0'} />
					</View>
				</View>
				{/* {store && (
					<MyText
						style={{
							marginTop: 4,
							marginLeft: Platform.OS === 'ios' ? 8 : 4,
							lineHeight: 16,
							fontSize: 'smd',
							color: theme === 'light' ? '#181818' : '#EFEFF0',
						}}>{`${store?.location?.address?.trim()}`}</MyText>
				)} */}
			</TouchableWithoutFeedback>
		</View>
	);
};

export default LocationMenuBar;

const styles = StyleSheet.create({});
