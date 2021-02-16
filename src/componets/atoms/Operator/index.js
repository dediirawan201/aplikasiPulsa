import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IcAxis, IcIndosat, IcSmartfren, IcTelkom, IcThree, IcXl} from '../../../assets';
const Operator = ({onPress}) => {
    return (
        <View style={styles.page}>
            <View style={styles.operator}>
                <TouchableOpacity activeOpacity={0.5} >
                    <IcTelkom />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <IcIndosat />
                </TouchableOpacity>
            </View>
            <View style={styles.operator}>
                <TouchableOpacity>
                <IcThree />
                </TouchableOpacity>
                <TouchableOpacity>
                <IcXl />
                </TouchableOpacity>
            </View>
            <View style={styles.operator}>
                <TouchableOpacity>
                <IcAxis />
                </TouchableOpacity>
                <TouchableOpacity>
                <IcSmartfren />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Operator;

const styles = StyleSheet.create({
    page:{marginTop:53},
    operator:{flexDirection:'row',marginTop:21, marginHorizontal:29,justifyContent:'space-around'},
})
