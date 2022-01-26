import { Colors } from 'assets/styles/Colors';
import IconCard from 'components/iconCard/IconCard';
import ProductList from 'components/productList/ProductList';
import Slider from 'components/slider/Slider';
import { NativeBaseProvider, ScrollView } from 'native-base';
import { default as React } from 'react';
import { Dimensions, StatusBar } from 'react-native';

function Home() {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={Colors.primary} barStyle="dark-content"/>
            <ScrollView>
                <Slider/>
                <IconCard/>
                <ProductList/>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Home;