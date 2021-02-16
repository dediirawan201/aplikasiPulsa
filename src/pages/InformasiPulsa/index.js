import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonMerah, Gap } from '../../componets'

const InformasiPulsa = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.pesan}>
            <Text style={styles.text}>Terimakasih,</Text>
            <Text style={styles.text}>Anda Telah Melakukan</Text>
            <Text style={styles.text}>Pemesanan Di Outlet Kami</Text>
            <Gap height={56} />
            <Text style={{fontSize:24, fontFamily:"Lato-Bold"}}>No.Order</Text>
            <Gap height={10} />
            <Text style={{fontSize:64, fontFamily:'Lato-Bold'}}>PL001</Text>
            <Gap height={127} />
            <ButtonMerah width={155}
            title="Home"
            radius={7}
            height={56}
            size={24}
            onPress={ () => navigation.replace('Home')}
            />
            </View>
        </View>
    )
}

export default InformasiPulsa

const styles = StyleSheet.create({
    page:{backgroundColor:'white', flex:1,},
    pesan:{justifyContent:'center',alignItems:'center', marginTop:56},
    text:{fontSize:24, fontFamily:'Lato-Regular'}
})
