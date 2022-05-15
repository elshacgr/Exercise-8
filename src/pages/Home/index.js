import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import {Button, Gap, Number, TransactionCard} from '../../components';
import Tabs from '../../components/atoms/Tabs';
import {pic} from '../../assets';
const Home = ({navigation, route}) => {
  return (
    <View style={styles.page}>
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.title}>Money Tracker</Text>
          <Text style={styles.subTitle}>Track your money</Text>
          <Image style={styles.picture} source={pic} />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
        <View style={styles.line} />
        <Text style={styles.cardTitle}>Your Balance</Text>
        <Text style={styles.number}>Rp. 10.000.000</Text>
        <Text style={styles.cashOnHand}>Cash On Hand </Text>
        <Text style={styles.cashOnBank}>Cash On Bank </Text>
        <Text style={styles.cashHand}>Rp. 4.000.000</Text>
        <Text style={styles.cashBank}>Rp. 6.000.000</Text>
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.cardTitle}>Add Transaction</Text>
        <Button
          title="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={16} />
        <Button
          title="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
      <View style={styles.tab}>
        <Tabs />
      </View>
      <Gap height={24} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileWrapper: {
    paddingLeft: 24,
    paddingVertical: 38,
    paddingBottom: -50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 22,
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  balanceWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    height: 208,
    paddingTop: 13, // square dan text
    // flexDirection: 'row',
  },
  cardTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 16,
  },
  cashOnHand: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 14,
    top: 40,
  },
  cashOnBank: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 14,
    top: 50,
  },
  line: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 360,
    height: 1.7,
    bottom: 110,
    borderRadius: 250,
    left: 25,
  },
  number: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 24,
    right: -90,
    top: 5,
  },
  cashHand: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 14,
    left: 130,
    top: -7.2,
  },
  cashBank: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 14,
    left: 130,
    top: 3.5,
  },
  tab: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 415,
    height: 70,
    bottom: 0,
    borderRadius: 0,
    // left: 25,
  },
  picture: {
    left: 295,
    top: -60,
  },
});
