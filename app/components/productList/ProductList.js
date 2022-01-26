import { Box, Stack, Text, FlatList, HStack } from 'native-base';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { scale } from "utils/TextSize";
import ProductCard from 'components/productCard/ProductCard';


function ProductList({name, uri, code, price, promo}) {

	const [data, setData] = useState([
		[
			{
				name:"ADHERIBLE 3D BLOCK", 
				uri:"https://img.betterware.com.mx/iwVRzQgtBsF0YpJoeyzhk6ks6kY=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21742-1-Adherible-3D-Block-Betterware.png",
				code:"21742",
				price:"159.00",
				promo:"129.00"
			},
			{
				name:"COBI COJÍN", 
				uri:"https://img.betterware.com.mx/kXpP2PzGOUAKFtxmb7__pVKFnYg=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22301-1-Cobi-Cojin-Betterware.jpg",
				code:"22301",
				price:"329..00",
				promo:"129.00"
			}
		],
		[
			{
				name:"GYM-FIT", 
				uri:"https://img.betterware.com.mx/nn9QQVKVRDhc7yWqc36iRoLfVW8=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22707-1-Gym-Fit-Betterware.jpg",
				code:"22707",
				price:"159.00",
				promo:"129.00"
			},
			{
				name:"PANTU MOPS", 
				uri:"https://img.betterware.com.mx/xtAgAoR7xg6j7FUWveGfJwNKnRQ=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22106-1-Pantu-Mop-Betterware.jpg",
				code:"22301",
				price:"329..00",
				promo:"129.00"
			}
		],
		[
			{
				name:"ADHERIBLE 3D BLOCK", 
				uri:"https://img.betterware.com.mx/iwVRzQgtBsF0YpJoeyzhk6ks6kY=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21742-1-Adherible-3D-Block-Betterware.png",
				code:"21742",
				price:"159.00",
				promo:"129.00"
			},
			{
				name:"COBI COJÍN", 
				uri:"https://img.betterware.com.mx/kXpP2PzGOUAKFtxmb7__pVKFnYg=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22301-1-Cobi-Cojin-Betterware.jpg",
				code:"22301",
				price:"329..00",
				promo:"129.00"
			}
		],
		[
			{
				name:"GYM-FIT", 
				uri:"https://img.betterware.com.mx/nn9QQVKVRDhc7yWqc36iRoLfVW8=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22707-1-Gym-Fit-Betterware.jpg",
				code:"22707",
				price:"159.00",
				promo:"129.00"
			},
			{
				name:"PANTU MOPS", 
				uri:"https://img.betterware.com.mx/xtAgAoR7xg6j7FUWveGfJwNKnRQ=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F22106-1-Pantu-Mop-Betterware.jpg",
				code:"22301",
				price:"329..00",
				promo:"129.00"
			}
		]
		
	]);

	return (
		<FlatList data={data} renderItem={({item, key})=>{
			console.log(item)
			return(
			<HStack space={0} justifyContent="center" key={"rowList"+key} >
				<ProductCard {...item[0]}/>
				<ProductCard {...item[1]}/>
			</HStack>)
		}}
		/>

	);
}

export default ProductList;
