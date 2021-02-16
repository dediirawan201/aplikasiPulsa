import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcAxis, IcIndosat, IcSmartfren, IcTelkom, IcThree, IcXl } from '../../assets';
import { Header } from '../../componets';
const Pulsa = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="PULSA"/>
        <View style={styles.page}>
        <View style={styles.operator}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('FormPulsa')} >
                <IcTelkom />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('FormPulsa')}>
                <IcIndosat />
            </TouchableOpacity>
        </View>
        <View style={styles.operator}>
            <TouchableOpacity onPress={() => navigation.navigate('FormPulsa')}>
            <IcThree />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FormPulsa')}>
            <IcXl />
            </TouchableOpacity>
        </View>
        <View style={styles.operator}>
            <TouchableOpacity onPress={() => navigation.navigate('FormPulsa')}>
            <IcAxis />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FormPulsa')}>
            <IcSmartfren />
            </TouchableOpacity>
        </View>
    </View>
</View>
)
}

export default Pulsa;

const styles = StyleSheet.create({
container:{backgroundColor:'white'},
page:{marginTop:53},
operator:{flexDirection:'row',marginTop:21, marginHorizontal:29,justifyContent:'space-around'},
})