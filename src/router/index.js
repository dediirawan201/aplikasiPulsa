import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FormPulsa, Home, InformasiListrik, InformasiPulsa, InformasiTagihan, Listrik, Pulsa, Tagihan } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Listrik" component={Listrik} options={{headerShown:false}} />
            <Stack.Screen name="Pulsa" component={Pulsa} options={{headerShown:false}} />
            <Stack.Screen name="Tagihan" component={Tagihan} options={{headerShown:false}} />
            <Stack.Screen name="FormPulsa" component={FormPulsa} options={{headerShown:false}} />
            <Stack.Screen name="InformasiPulsa" component={InformasiPulsa} options={{headerShown:false}} />
            <Stack.Screen name="InformasiListrik" component={InformasiListrik} options={{headerShown:false}} />
            <Stack.Screen name="InformasiTagihan" component={InformasiTagihan} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default Router;

