import React from 'react';
import { View } from 'react-native';
import { MyText } from '../components/MyDesign';

const renderers = {
	// hr: (htmlAttribs, children, convertedCSSStyles, passProps) => (
	// 	<View key={passProps?.key} style={{ width: '100%', height: 1, backgroundColor: 'blue' }} />
	// ),
	// p: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<MyText key={passProps?.key} style={{ lineHeight: 25, fontSize: 32 }}>
	// 			{children}
	// 		</MyText>
	// 	);
	// },
	// span: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<MyText key={passProps?.key} style={{ lineHeight: 25, fontSize: 32 }}>
	// 			{children}
	// 		</MyText>
	// 	);
	// },
	// strong: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<MyText key={passProps?.key} style={{ lineHeight: 25, fontSize: 32 }} bold>
	// 			{children}
	// 		</MyText>
	// 	);
	// },
	// ui: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return <View key={passProps?.key}>{children}</View>;
	// },
	// br: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return <View key={passProps?.key} style={{ height: 0, width: 0, margin: 0, padding: 0 }} />;
	// },
	// li: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<MyText key={passProps?.key} style={{ lineHeight: 22 }}>
	// 			{children}
	// 		</MyText>
	// 	);
	// },
	// h3: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<MyText key={passProps?.key} style={{ lineHeight: 22, marginVertical: 12 }} bold>
	// 			{children}
	// 		</MyText>
	// 	);
	// },
	// ol: (htmlAttribs, children, convertedCSSStyles, passProps) => {
	// 	return (
	// 		<View key={passProps?.key}>
	// 			{children.map((item, index) => {
	// 				return (
	// 					<View
	// 						key={index}
	// 						style={{
	// 							display: 'flex',
	// 							flexDirection: 'row',
	// 							marginVertical: 5,
	// 							alignItems: 'flex-start',
	// 						}}>
	// 						<MyText style={{ lineHeight: 24.5 }}>{index + 1}. </MyText>
	// 						{item}
	// 					</View>
	// 				);
	// 			})}
	// 		</View>
	// 	);
	// },
};

export { renderers };
