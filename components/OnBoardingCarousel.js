import { Dimensions, Image, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-native-ui-lib';
// import Animated, { EasingNode } from 'react-native-reanimated';
const { width } = Dimensions.get("window");


function animatedValue(value) {
	const [topAnimated] = useState(new Animated.Value(value ? value : 0));
	return topAnimated;
}

const images = [
	  {
	 	name: "Perfume",
		img: "https://img.loccitane.com/ocms/img/lib/_2013_StaticContent/OCC_4678627ae1a64e8ea33a3b6702fbeb4f.jpg",
	  },
	  {
		name: "Statue",
		img: "https://m.media-amazon.com/images/I/71f6-arA5TL._SY450_.jpg",
	  },
	  {
		name: "Jewelry",
		img: "https://cdn.shopify.com/s/files/1/0558/3509/9288/files/Mobile_banner_498fc643-ae05-444b-a453-caf3c6750360_1600x.jpg?v=1657979725",
	  },
	  {
		name: "Gem Stone",
		img: "https://3.bp.blogspot.com/-y0TXbvMVDoI/WoWTPQCckLI/AAAAAAAAO3I/7QeY_hRxGXYstB90jpqD4Q3qWgsNGt8KACLcBGAs/s1600/How%2Bto%2BDifferentiate%2BBetween%2BNatural%2BAnd%2BSynthetic%2BGemstones%2B%25281%2529.jpg",
	  },
	  {
		name: "God Statue",
		img: "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/f/l/8/tfg-7539-shilpacharya-handicrafts-original-imagfgh6qguppxpw.jpeg?q=70",
	  },
];

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const ProgressComponent = ({ imageCount, currentIndex, paused, interval }) => {
	let widthAnimRefs = [];
	let spacing = 2;
	for (let i = 0; i < imageCount; i++) {
		widthAnimRefs[i] = animatedValue();
	}

	useEffect(() => {
		for (let i = 0; i < imageCount; i++) {
			i < currentIndex
				? Animated.timing(widthAnimRefs[i], {
						toValue: (windowWidth - 32) / imageCount - spacing,
						duration: 0,
						useNativeDriver: false,
				  }).start()
				: i === currentIndex
				? Animated.timing(widthAnimRefs[i], {
						toValue: 0,
						duration: 0,
						useNativeDriver: false,
				  }).start(() => {
						Animated.timing(widthAnimRefs[i], {
							toValue: (windowWidth - 32) / imageCount - spacing,
							// easing: EasingNode.linear,
							duration: interval,
							useNativeDriver: false,
						}).start();
				  })
				: Animated.timing(widthAnimRefs[i], {
						toValue: 0,
						duration: 0,
						useNativeDriver: false,
				  }).start();
		}
	}, [currentIndex, paused]);

	return (
		<Animated.View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 16,
			}}>
			{Array(imageCount)
				.fill('')
				.map((_, index) => {
					return (
						<View
							key={index}
							style={{
								borderRadius: 8,
								backgroundColor: '#A3A3A3',
								width: (windowWidth - 32) / imageCount - spacing,
								height: 2,
							}}>
							<Animated.View
								style={{
									borderRadius: 8,
									backgroundColor: 'white',
									width: widthAnimRefs[index],
									height: 2,
								}}></Animated.View>
						</View>
					);
				})}
		</Animated.View>
	);
};

const OnBoardingCarousel = () => {
	const autoplayInterval = 5000;
	const [currentIndex, setCurrentIndex] = useState(0);

	const onChangePage = (pageIndex, oldPageIndex, info) => {
		setCurrentIndex(pageIndex);
	};

	return (
		<View style={{borderRadius:10}}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',borderRadius:10, }}>
				<Carousel
					autoplay={true}
					loop={true}
					autoplayInterval={autoplayInterval}
					horizontal
					onChangePage={onChangePage}
					pageWidth={width}
					style={{borderRadius:10}}
					>
					{images.map((image, index) => (
						<View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center',borderRadius:10,marginHorizontal:10 }}>
							<View style={{marginHorizontal:10,justifyContent:"flex-start"}}>
							<Image
								source={{uri:image.img}}
								//resizeMode={'contain'}
								style={{
									width:width-35,
									height: 250,
									resizeMode: "cover",
									borderRadius: 10,
									marginHorizontal:16
								  }}
							/>
							</View>
						</View>
					))}
				</Carousel>
				<ProgressComponent imageCount={images?.length} currentIndex={currentIndex} interval={autoplayInterval} />
			</View>
		</View>
	);
};

export default OnBoardingCarousel;

const styles = StyleSheet.create({});
