import { Colors } from 'assets/styles/Colors';
import IconCard from 'components/iconCard/IconCard';
import ProductList from 'components/productList/ProductList';
import Slider from 'components/slider/Slider';
import { NativeBaseProvider, ScrollView } from 'native-base';
import { default as React } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { Input, Box, Center, Button, Text, Icon } from "native-base";
import FAB from 'react-native-fab'
import { Appcontext } from 'betterware/AppContext';

function Home({ navigation }) {

    const context = React.useContext(Appcontext);

    const getFab = () => {
        if(!context.cart){
            return
        }
        let countCart = Object.keys(context.cart).length;
        if(countCart > 0){
            return(
                <FAB buttonColor={Colors.primary} iconTextColor="#FFFFFF" onClickAction={() => {navigation.navigate('Cart')}} visible={true} iconTextComponent={<Icon name="all-out"/>} />
            )
        }
    }

    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={Colors.primary} barStyle="dark-content"/>
            <ScrollView>
                <Slider/>
                <IconCard/>
                <ProductList/>
            </ScrollView>
            {getFab()}
        </NativeBaseProvider>
    );
}

export default Home;