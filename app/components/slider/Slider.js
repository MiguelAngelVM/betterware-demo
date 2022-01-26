import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Stack = createNativeStackNavigator();

function Slider() {

	const [images, setImages] = useState([
		'https://www.estrategia-sustentable.com.mx/wp-content/uploads/2021/05/betterware-busca-listarse-en-nasdaq-1132x509.jpg',
		'https://ofertasclasificados.com/wp-content/uploads/2020/04/four-banner.jpeg',
		'https://img.betterware.com.mx/h3twRyBScbEVaBpzduKdZrjXE4Y=/3840x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-media%2Fcontent%2Fimages%2Fbanners%2FTraining%2Funete.jpg',
		
	]);

	return (
		<SliderBox images={images} autoplay circleLoop/>

	);
}

export default Slider;
