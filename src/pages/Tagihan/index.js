import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, TextInput, Select, ButtonMerah} from '../../componets';
const Tagihan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="TAGIHAN" />
      <View style={styles.container}>
        <Select />
        <Gap height={18} />
        <TextInput placeholder="Masukan nomor Tagihan / Pembayaran" />
        <Gap height={18} />
        <TextInput placeholder="Masukan jumlah Pembayaran" />
      </View>
      <Gap height={24} />
      <View style={styles.submit}>
        <ButtonMerah
          width={221}
          title="BAYAR"
          radius={12}
          height={48}
          size={24}
          onPress={() => navigation.replace('InformasiTagihan') }
        />
      </View>
    </View>
  );
};

export default Tagihan;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  container: {marginTop: 50, paddingHorizontal: 31},
  submit: {justifyContent: 'center', alignItems: 'center'},
});
