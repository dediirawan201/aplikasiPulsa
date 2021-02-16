import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ButtonMerah, Header, TextInput} from '../../componets';

const Listrik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="LISTRIK" />
      <View style={styles.input}>
        <TextInput placeholder="Masukan Nomer Meteran" />
        <Text style={styles.text}>Pilih Jumlah Token</Text>
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
            title="50.000"
            size={28}
          />
        </View>
        <View style={styles.Button}>
          <Button
            height={73}
            width={173}
            title="100.000"
            size={28}
            radius={11}
          />
          <Button
            height={73}
            width={173}
            radius={11}
            title="200.000"
            size={28}
          />
        </View>
        <View style={styles.Button}>
          <Button
            height={73}
            width={173}
            title="500.000"
            size={28}
            radius={11}
          />
          <Button
            height={73}
            width={173}
            radius={11}
            title="1.000.000"
            size={28}
          />
        </View>
        <TextInput placeholder="Masukan jumlah token manual" />
        <View style={styles.submit}>
          <ButtonMerah
            width={221}
            title="BAYAR"
            radius={12}
            height={48}
            size={24}
            onPress={() => navigation.replace('InformasiListrik')}
          />
        </View>
      </View>
    </View>
  );
};

export default Listrik;

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
