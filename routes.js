import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'containers/home/index';
import Cart from 'containers/cart/index';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'assets/styles/Colors';

const Stack = createNativeStackNavigator();

const propsHome = {
    options:{ 
        title: 'Betterware' , 
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: 'white'
    }
}

const propsCart = {
    options:{ 
        title: 'Mi Carrito' , 
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: 'white'
    }
}

function Routes( {routeName = "Home", nav} ){
    return(
        <NavigationContainer ref={nav} routeName={ routeName }>
            <Stack.Navigator>
                <Stack.Screen name="Home" component = { Home } {...propsHome} />
                <Stack.Screen name="Cart" component = { Cart } {...propsCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    nativeBaseProvider:{
        backgroundColor: "red" ,
    },
})

export default Routes;
