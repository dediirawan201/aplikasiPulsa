import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ButtonMerah, TextInput} from '../../componets';

const FormPulsa = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.input}>
        <TextInput placeholder="Masukan Nomer Meteran" />
        <Text style={styles.text}>Pilih Jumlah Pulsa</Text>
        <View style={styles.Button}>
          <Button height={73} width={173} title="5.000" size={28} radius={11} />
          <Button
            height={73}
            width={173}
            radius={11}
            title="10.000"
            size={28}
          />
        </View>
        <View style={styles.Button}>
          <Button
            height={73}
            width={173}
            title="20.000"
            size={28}
            radius={11}
          />
          <Button
            height={73}
            width={173}
            radius={11}
            title="25.000"
            size={28}
          />
        </View>
        <View style={styles.Button}>
          <Button
            height={73}
            width={173}
            title="50.000"
            size={28}
            radius={11}
          />
          <Button
            height={73}
            width={173}
            radius={11}
            title="100.000"
            size={28}
          />
        </View>
        <TextInput placeholder="Masukan jumlah pulsa manual" />
        <View style={styles.submit}>
          <ButtonMerah
            width={221}
            title="BAYAR"
            radius={12}
            height={48}
            size={24}
            onPress={() => navigation.replace('InformasiPulsa')}
          />
        </View>
      </View>
    </View>
  );
};

export default FormPulsa;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white'},
  input: {marginTop: 26, marginHorizontal: 26},
  text: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginBottom: 13,
  },
  Button: {flexDirection: 'row', justifyContent: 'space-between'},
  submit: {marginTop: 20, justifyContent: 'center', alignItems: 'center'},
});
