import { Colors } from 'assets/styles/Colors';
import { Appcontext } from 'betterware/AppContext';
import { NativeBaseProvider, ScrollView, View } from 'native-base';
import { default as React, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import ProductCard from 'components/productCard/ProductCard';
import { Box, Stack, Text, FlatList, HStack } from 'native-base';
import { scale } from "utils/TextSize";

function Cart() {
    const context = React.useContext(Appcontext);
    let [subtotal, setSubtotal] = useState(0);
    let [total, setTotal] = useState(0);
    let [promo, setPromo] = useState(0);
    let [shipping, setShipping] = useState(85);
    let [cart, setCart] = useState();

    const getCart = () => {
        let newCart = [];
        let newSubtotal = 0;
        let newPromo = 0;
        for(let key in context.cart) {
            newCart.push( context.cart[key]);
            newSubtotal += (parseFloat(context.cart[key].price) * parseInt(context.cart[key].amount));
            newPromo    += ((parseFloat(context.cart[key].price)- parseFloat(context.cart[key].promo) ) * parseInt(context.cart[key].amount));
        }
        
        return {newCart, newSubtotal, newPromo};
    }
    
    useEffect(() => {
        let {newCart, newSubtotal, newPromo} = getCart();
        setCart(newCart);
        setSubtotal(newSubtotal);
        setPromo(newPromo);
        setTotal((newSubtotal + shipping) - newPromo);
    }, [])
    
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={Colors.primary} barStyle="dark-content"/>
            <ScrollView>
                    <FlatList data={cart} renderItem={({item, key})=>{
                        return(<ProductCard w="97%" showAmount={0} {...item} updateAmount={item.amount}/>)
                    }}
                />
                <Box h={scale(200)} w={"97%"} rounded="md" style={{flexDirection:"column", backgroundColor:"white", margin:"2%", borderRadius:10, paddingTop:0, padding:scale(5)}}>
                    <Text style={{marginTop:scale(10), fontWeight:"bold"}}>RESUMEN DE PEDIDO</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{width:"70%"}}>Subtotal</Text>
                        <Text style={{color:"orange", fontWeight:"bold", textAlign:"right", width:"25%"}}>${subtotal.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{width:"70%"}}>Descuento Promoción</Text>
                        <Text style={{color:"orange", fontWeight:"bold", textAlign:"right", width:"25%"}}>-${promo.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{width:"70%"}}>Gastos de Envío</Text>
                        <Text style={{color:"orange", fontWeight:"bold", textAlign:"right", width:"25%"}}>${shipping.toFixed(2)}</Text>
                    </View>
                    <View style={{width:"100%", backgroundColor:"black", height:1, marginTop:scale(5), marginBottom:scale(5)}}></View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{width:"70%"}}>TOTAL DE COMPRA</Text>
                        <Text style={{color:"orange", fontWeight:"bold", textAlign:"right", width:"25%"}}>${total.toFixed(2)}</Text>
                    </View>
                    
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Cart;