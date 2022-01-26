import { Box, Icon, Stack, Text, View } from 'native-base';
import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale } from "utils/TextSize";
import { Colors } from 'assets/styles/Colors';


function ProductCard({name, uri, code, price, promo}) {
	
	let [amount, setAmount] = useState(0);
	const changeAmount = (sum) => {
		
		if(sum)
			amount ++;
		else 
			amount --;
		
		setAmount(amount)
	}
	return (
		<Box h={scale(270)} w="45%" rounded="md" style={styles.box}>
			<Text style={styles.title}>{name}</Text>
			<Image source={{uri}} style={styles.image}/>
			<Text style={{fontSize:scale(9)}}>Código {code}</Text>
			<Text style={{fontSize:scale(9)}}>${price} o llévalo por <Text style={{fontSize:scale(9), color:"orange", fontWeight:"bold"}}>${promo}</Text></Text>
			<View style={styles.amountView}>
				<TouchableOpacity  onPress={()=>{amount > 0 ? changeAmount(false) : ""}} style={styles.amount}>
					<Text style={{fontWeight:"bold", fontSize:scale(20), textAlign:"center", top:scale(2)}}>-</Text>
				</TouchableOpacity>
					<Text style={{fontSize:scale(15), color:"black", marginRight:scale(10), marginLeft:scale(10)}}>{amount}</Text>
				<TouchableOpacity  onPress={()=>{changeAmount(true)}} style={styles.amount}>
					<Text style={{fontWeight:"bold", fontSize:scale(18), textAlign:"center", top:scale(2)}}>+</Text>
				</TouchableOpacity>
			</View>
				
		</Box>

	);
}
const styles = StyleSheet.create({
    box:{
        flexDirection:"column", backgroundColor:"white", margin:"2%", borderRadius:10, paddingTop:0, padding:scale(5)
    },
	title:{
		fontSize:scale(9), marginTop:scale(5), fontWeight:"bold", color:"grey"
	},
	image:{
		width:"100%", height:scale(155), resizeMode:"contain"
	},
	amountView:{
		flex: 1,flexDirection: 'row', marginTop:10, marginBottom:20
	},
	amount:{
		backgroundColor:Colors.primary, width:scale(20), height:scale(20), borderRadius:15
	}
})
export default ProductCard;
