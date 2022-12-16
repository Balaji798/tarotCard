// react native component ot search and select a particular item of the list
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { MyText } from './MyDesign';
import Input from './Input';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-ui-lib';

const SearchPicker = (props) => {
	const [searchQuery, setSearchQuery] = useState('');

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={{
				// paddingHorizontal: 16,
				paddingVertical: 24,
				borderBottomWidth: 1,
				borderBottomColor: '#F2F2F2',
			}}
			onPress={() => {
				props.onSelect(item);
			}}>
			{props.renderItem ? props.renderItem(item) : <MyText>{item.label}</MyText>}
		</TouchableOpacity>
	);

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
			<MyText style={{ fontSize: 'xl' }} bold>
				{props.title}
			</MyText>
			<Input
				placeholder={props.searchBarPlaceholder}
				style={{ marginTop: 16 }}
				onChangeText={(text) => setSearchQuery(text)}
				value={searchQuery}
				noBorderColorChange
				prefixIcon={<EvilIcons name="search" size={25} color="#747474" />}
			/>
			<FlatList
				showsVerticalScrollIndicator={false}
				style={{ marginTop: 30, backgroundColor: 'white' }}
				keyExtractor={(item) => item.code}
				data={props.data
					?.filter((item) => {
						// filter list based on search query if item is a values
						if (typeof item === 'object') {
							// return true if any of the value of the object is equal to the search query
							return Object.keys(item).some((key) => {
								if (typeof item[key] === 'string') {
									if (item[key]?.toLowerCase()?.includes(searchQuery.toLowerCase())) {
										return true;
									}
								}
							});
						} else {
							// return true if the item is equal to the search query
							return item?.toLowerCase()?.includes(searchQuery.toLowerCase());
						}
					})
					.sort((a, b) => {
						// sort list based on search query if item is a values
						if (typeof a === 'object') {
							// sort based on the first value of the object
							return a[Object.keys(a).name]?.toLowerCase()?.localeCompare(b[Object.keys(b)]?.toLowerCase());
						} else {
							// sort based on the item
							return a?.toLowerCase()?.localeCompare(b?.toLowerCase());
						}
					})}
				renderItem={renderItem}
			/>
		</KeyboardAvoidingView>
	);
};

export default SearchPicker;

const styles = StyleSheet.create({});
