import { Box, Icon, Stack, Text, View } from 'native-base';
import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale } from "utils/TextSize";
import { Colors } from 'assets/styles/Colors';
import SInfo from 'react-native-sensitive-info';
import { optionsSINFO } from 'utils/Utils.js';
import { Appcontext } from 'betterware/AppContext';

function ProductCard({name, uri, code, price, promo, id, w="45%", h=scale(270), showAmount = 1, updateAmount = 0 }) {

	const context = React.useContext(Appcontext);
	
	let [amount, setAmount] = useState(0);
	
	const changeAmount = async (sum) => {	
		sum ?  amount ++ :  amount --;

		setAmount(amount);
		
		let cart = context.cart;
		
		if(!cart){
			cart = {};
		}
		
		if(amount == 0 && cart['id' + id]){
			delete cart['id' + id];
		}else if(amount > 0 && cart['id' + id]){
			cart['id' + id].amount = amount;
		}else if(amount > 0 && !cart['id' + id]){
			cart['id' + id] = {
				name, uri, code, price, promo, id, amount
			};
		}
		context.setChanges({cart})
	}

	return (
		<Box h={h} w={w} rounded="md" style={styles.box}>
			<Text style={styles.title}>{name}</Text>
			<Image source={{uri}} style={styles.image}/>
			<Text style={{fontSize:scale(9)}}>Código {code}</Text>
			<Text style={{fontSize:scale(9)}}>${price} o llévalo por <Text style={{fontSize:scale(9), color:"orange", fontWeight:"bold"}}>${promo}</Text></Text>
			{showAmount == 1 && 
				<View style={styles.amountView}>
					<TouchableOpacity  onPress={()=>{amount > 0 ? changeAmount(false) : ""}} style={styles.amount}>
						<Text style={{fontWeight:"bold", fontSize:scale(20), textAlign:"center", top:scale(2)}}>-</Text>
					</TouchableOpacity>
						<Text style={{fontSize:scale(15), color:"black", marginRight:scale(10), marginLeft:scale(10)}}>{amount}</Text>
					<TouchableOpacity  onPress={()=>{changeAmount(true)}} style={styles.amount}>
						<Text style={{fontWeight:"bold", fontSize:scale(18), textAlign:"center", top:scale(2)}}>+</Text>
					</TouchableOpacity>
				</View>	
			}
			{updateAmount > 0 && 
				<Text style={{fontSize:scale(9)}}>Cantidad {updateAmount}</Text>
			}
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
