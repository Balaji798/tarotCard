// react native component for text input
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { MyText } from './MyDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width: windowWidth } = Dimensions.get('window');
const Input = (props) => {
	const [focus, setFocus] = useState(false);
	const textInputRef = useRef();

	return (
		<TouchableOpacity
			onPress={() => {
				textInputRef.current.focus();
			}}
			style={{ ...props.style }}>
			{props.title && (
				<View style={{ marginBottom: 10 }}>
					<MyText style={{ fontSize: 'smd', color: props.error ? 'rgba(201,23,19,0.9)' : focus ? 'rgb(45,145,64)' : '#747474' }}>
						{props.title}
						{props.required && (
							<MyText style={{ color: 'red', fontSize: 'md' }}> *</MyText>
						)}
					</MyText>
				</View>
			)}
			<View
				style={{
					flexDirection: 'row',
					alignItems: props.textArea ? 'flex-start' : 'center',

					// height: props.textArea ? 120 : null,
					// paddingVertical: !props.textArea ? 16 : 10,
					paddingHorizontal: props.prefixIcon ? 8 : 16,

					height: props.textArea ? 120 : 48,
                    paddingVertical: !props.textArea ? null : 10,
					margin: 0,

					textAlign: props.textAlign || 'left',
					textAlignVertical: props.textArea ? 'top' : 'center',

					borderWidth: 1,
					borderRadius: 5,
					borderColor: props.noBorderColorChange
						? '#D1D1D1'
						: props.error
						? 'rgba(201,23,19,0.9)'
						: focus
						? 'rgb(45,145,64)'
						: props.borderColor || '#D1D1D1',
				}}>
				{props.prefixIcon}
				<TextInput
					ref={textInputRef}
					multiline={props.textArea}
					maxLength={props.maxLength}
					placeholder={props.placeholder}
					placeholderTextColor={props.placeholderTextColor || '#A3A3A3'}
					onFocus={() => {
						setFocus(true);
					}}
					keyboardType={props.type === 'number' ? 'numeric' : 'default'}
					onBlur={() => {
						setFocus(false);
					}}
					{...props}
					style={{
						flex: 1,
						fontFamily: 'Gotham-Book',
						fontSize: props.fontSize || Math.floor(windowWidth / 24),
						marginLeft: props.prefixIcon ? 8 : 0,
						padding: 0,
						margin: 0,
						textAlign: props.textAlign || 'left',
						textAlignVertical: props.textArea ? 'top' : 'center',

						...props.inputStyle,
					}}
					allowFontScaling={false}
				/>
				{props.suffixIcon}
			</View>
		</TouchableOpacity>
	);
};

export default Input;

const styles = StyleSheet.create({});
