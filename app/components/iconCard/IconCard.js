import img from 'assets/images/Images';
import { Center, HStack, Stack, Text } from 'native-base';
import { default as React } from 'react';
import { Image , StyleSheet} from 'react-native';
import { scale } from "utils/TextSize";

function IconCard() {
	return (
		<>
			<HStack space={0} justifyContent="center" style={{marginTop:scale(10)}}>
				<Center h="40" w="45%" rounded="md" style={styles.center}>
					<Image source={img.car} style={styles.image}/>
					<Text style={styles.title}>Envíos gratis</Text>
					<Text style={styles.subtitle}>en todos tus pedidos</Text>
				</Center>
				<Center h="40" w="45%" rounded="md" style={styles.center}>
					<Image source={img.bag} style={styles.image}/>
					<Text style={styles.title}>Tu pago protegido</Text>
					<Text style={styles.subtitle}>Tu privacidad es nuestra prioridad</Text>
				</Center>
			</HStack>
			<HStack space={0} justifyContent="center">
				<Center h="40" w="45%" rounded="md" style={styles.center}>
					<Image source={img.user} style={styles.image}/>
					<Text style={styles.title}>Atención personalizada</Text>
					<Text style={styles.subtitle}>de Distribuidores calificados</Text>
				</Center>
				<Center h="40" w="45%" rounded="md" style={styles.center}>
					<Image source={img.money} style={styles.image}/>
					<Text style={styles.subtitle}>Opción de pago</Text>
					<Text style={styles.title}>contra entrega</Text>
				</Center>
			</HStack>   
		</>
	);
}

const styles = StyleSheet.create({
	center:{
		backgroundColor:"white", margin:"2%", borderRadius:10
	},
	image:{
		marginRight:scale(5), width:scale(50), height:scale(50), resizeMode:"contain"
	},
	title:{
		fontWeight:"bold", fontSize:scale(11), textAlign:"center"
	},
	subtitle:{
		fontSize:scale(11), textAlign:"center"
	}
})
export default IconCard;
