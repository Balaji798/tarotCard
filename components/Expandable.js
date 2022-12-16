import { useState } from 'react';
import { View } from 'react-native';
import { ExpandableSection } from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { MyText } from './MyDesign';

import { renderers } from '../utils/renderers';

const Expandable = props => {
	const [expanded, setExpanded] = useState(props.opened);

	return (
		<View
			style={{
				borderBottomWidth: 1,
				borderBottomColor: '#EFEFF0',
			}}>
			<ExpandableSection
				top={false}
				expanded={expanded}
				sectionHeader={
					<View style={{ paddingVertical: 16, flexDirection: 'row', alignItems: 'flex-start' }}>
						<MyText style={{ fontSize: 'mlg', flex: 1, lineHeight: 24 }} fontWeight="500">
							{props.ques}
						</MyText>
						<AntDesign
							name={expanded ? 'close' : 'plus'}
							size={24}
							style={{
								marginLeft: 20,
							}}
							color="#939499"
						/>
					</View>
				}
				onPress={() => setExpanded(!expanded)}>
				<View style={{ paddingTop: 10, paddingHorizontal: 5 }}>
					<RenderHtml source={{ html: props.ans }} renderers={renderers} />
				</View>
			</ExpandableSection>
		</View>
	);
};

export default Expandable;
