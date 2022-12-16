// import React, { useState } from 'react';

// import { Modal, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// //import CountryFlag from 'react-native-country-flag';

// import { getCountry } from '../utils/countries';
// import { MyText } from './MyDesign';
// import SearchPicker from './SearchPicker';

// const CountrySelector = ({ country, setCountry, ...props }) => {
// 	const countries = ['AE', 'IN'].map(e => getCountry(e));

// 	const [visible, setVisible] = useState(false);
// 	const openModal = () => setVisible(true);
// 	const closeModal = () => setVisible(false);

// 	return (
// 		<>
// 			<TouchableOpacity
// 				onPress={openModal}
// 				disabled={props.disabled}
// 				style={{
// 					flexDirection: 'row',
// 					alignItems: 'center',
// 					justifyContent: 'space-between',

// 					// paddingVertical: 16,
// 					height: 48,
// 					paddingVertical: 10,
// 					paddingHorizontal: 16,

// 					borderColor: '#D1D1D1',
// 					borderWidth: 1,
// 					borderRadius: 5,
// 					...props.style,
// 				}}>
// 				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
// 					{/* <View style={{ marginRight: 8 }}>
// 						<CountryFlag isoCode={country?.code?.toLowerCase()} size={16} style={{ height: 16 }} />
// 					</View> */}
// 					<MyText style={{ fontSize: 'mlg', lineHeight: 18.5 }}>
// 						{props.showCountryName ? country?.name : '+' + country?.phone}
// 					</MyText>
// 				</View>
// 				{!props.doNotShowChevron && <AntDesign name="down" size={12} color="rgb(102,102,102)" />}
// 			</TouchableOpacity>
// 			<Modal
// 				presentationStyle="pageSheet"
// 				visible={visible}
// 				onRequestClose={closeModal}
// 				transparent={false}
// 				animationType="slide"
// 				onDismiss={closeModal}
// 				contentContainerStyle={{
// 					flex: 1,
// 					margin: 0,
// 					backgroundColor: 'white',
// 					alignItems: undefined,
// 					justifyContent: undefined,
// 				}}>
// 				<View style={{ flex: 1, paddingTop: 16, paddingHorizontal: 16 }}>
// 					<SearchPicker
// 						searchBarPlaceholder={'Search country'}
// 						title={props.title}
// 						filterKey="name"
// 						data={countries}
// 						onSelect={item => {
// 							props.setValue(item);
// 							setVisible(false);
// 						}}
// 						renderItem={item => (
// 							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
// 								<MyText style={{ fontSize: 'lg', marginRight: 12 }}>{item?.emoji}</MyText>
// 								<MyText style={{ fontSize: 'mlg' }}>{item?.name}</MyText>
// 								<MyText style={{ fontSize: 'mlg' }}>{` (+${item?.phone})`}</MyText>
// 							</View>
// 						)}
// 						closeModal={closeModal}
// 						{...props}
// 					/>
// 				</View>
// 			</Modal>
// 		</>
// 	);
// };

// export default CountrySelector;
import { StyleSheet, Text, View } from "react-native";
import countryTelData from "country-telephone-data";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Modal } from "react-native-paper";
import { useState, useRef } from "react";
import { TouchableOpacity } from "react-native-ui-lib";

const CountrySelector = (props) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const setCode = (code) => {
    props.setCallingCode(code);
    props.setModal(!props.modal);
  };
  return (
    <Modal
      visible={props.modal}
      style={{ backgroundColor: "#fff", height: "100%", paddingHorizontal: 16 }}
    >
      <Entypo
        name={"cross"}
        size={35}
        onPress={() => props.setModal(!props.modal)}
      />
      <View
        style={{
          width: "100%",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Phone Number"
          style={{
            flex: 1,
            paddingLeft: 10,
            fontSize: 16,
            borderWidth: 1,
            height: 40,
            borderColor: "#d3d3d3",
            borderRadius: 10,
          }}
          onChangeText={(nextText) => setSearch(nextText)}
          ref={inputRef}
        />
      </View>
      <View style={{ height: "87%" }}>
        <ScrollView>
          {props.data.map((item, index) => {
            const isMatch =
              item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            return (
              <>
                {isMatch && (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      paddingVertical: 10,
                    }}
                    onPress={() => setCode(item.dialCode)}
                    key={index}
                  >
                    <Text style={{ paddingRight: 10 }}>+{item.dialCode}</Text>
                    <Text>{item.name.toUpperCase()}</Text>
                  </TouchableOpacity>
                )}
              </>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CountrySelector;

const styles = StyleSheet.create({});
