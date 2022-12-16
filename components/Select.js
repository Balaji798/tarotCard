import { KeyboardAvoidingView, Modal, Platform, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-ui-lib';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { MyText } from './MyDesign';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import Input from './Input';
import { useNavigation } from '@react-navigation/native';

const Select = ({ value, setValue, ...props }) => {
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const openModal = () => setVisible(true);
	const closeModal = () => setVisible(false);

	return (
		<>
			<TouchableOpacity onPress={openModal} disabled={props.disabled}>
				{props.title && (
					<View style={{ marginBottom: 10 }}>
						<MyText style={{ fontSize: 'smd', color: props.error ? 'rgba(201,23,19,0.9)' : '#747474' }}>{props.title}</MyText>
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

						borderColor: '#D1D1D1',
						borderWidth: 1,
						borderRadius: 5,
						...props.style,
					}}>
					<MyText style={{ fontSize: 'mlg', color: !value ? '#A3A3A3' : null }}>{value || props.placeholder}</MyText>
					{!props.doNotShowChevron && <AntDesign name="down" size={12} color="#A3A3A3" />}
				</View>
			</TouchableOpacity>
			<Modal
				presentationStyle="pageSheet"
				visible={visible}
				onRequestClose={closeModal}
				transparent={false}
				animationType="slide"
				onDismiss={closeModal}
				contentContainerStyle={{
					flex: 1,
					margin: 0,
					backgroundColor: 'white',
					alignItems: undefined,
					justifyContent: undefined,
				}}>
				<View style={{ flex: 1, paddingTop: 16, paddingHorizontal: 16 }}>
					<FocusAwareStatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />
					<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
						<TouchableOpacity
							style={{ flex: 0, padding: 16, paddingLeft: 0 }}
							onPress={async () => {
								setVisible(false);
							}}>
							<AntDesign name={'close'} size={22} color={props.arrowColor || '#181818'} />
						</TouchableOpacity>
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
							keyExtractor={(item) => item}
							data={props.data
								?.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
								?.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0))}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={{
										// paddingHorizontal: 16,
										paddingVertical: 24,
										borderBottomWidth: 1,
										borderBottomColor: '#F2F2F2',
									}}
									onPress={() => {
										setValue(item);
										closeModal();
									}}>
									{props.renderItem ? props.renderItem(item) : <MyText style={{ fontSize: 'mlg' }}>{item}</MyText>}
								</TouchableOpacity>
							)}
						/>
					</KeyboardAvoidingView>
					{/* <SearchPicker
						searchBarPlaceholder={props.searchBarPlaceholder}
						title={props.title}
						filterKey="name"
						data={props.data}
						onSelect={(item) => {
							setValue(item);
							closeModal();
						}}
						renderItem={(item) => <MyText style={{ fontSize: 'mlg' }}>{item.name || item}</MyText>}
						closeModal={closeModal}
						{...props}
					/> */}
				</View>
			</Modal>
		</>
	);
};

export default Select;

const styles = StyleSheet.create({});
