import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import BackButton from '../components/BackButton';
import { PrimaryButton } from '../components/Button';

const CartScreen = ({ navigation }) => {
     const CartCard = ({ item }) => {
          return (
               <View style={style.cartCard}>
                    <Image
                         source={item.image}
                         style={{ height: 80, width: 80 }}
                    />
                    <View
                         style={{
                              height: 100,
                              marginLeft: 10,
                              paddingVertical: 20,
                              flex: 1,
                         }}>
                         <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                              {item.name}
                         </Text>
                         <Text style={{ fontSize: 11, color: COLORS.grey }}>
                              {item.ingredients}
                         </Text>
                         <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                              ${item.price}
                         </Text>
                    </View>
                    <View style={{ marginRight: 20, alignItems: 'center' }}>
                         <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                              3
                         </Text>
                         <View style={style.actionBtn}>
                              <Icon
                                   name="remove"
                                   size={25}
                                   color={COLORS.white}
                              />
                              <Icon name="add" size={25} color={COLORS.white} />
                         </View>
                    </View>
               </View>
          );
     };
     return (
          <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
               <View>
                    <BackButton
                         onPress={navigation.goBack}
                         btnText="Cart"
                         iconName="arrow-back-ios"
                         iconSize={28}
                    />
               </View>

               <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    data={foods}
                    renderItem={({ item }) => <CartCard item={item} />}
                    ListFooterComponentStyle={{
                         paddingHorizontal: 20,
                         marginTop: 20,
                    }}
                    ListFooterComponent={() => (
                         <View>
                              <View
                                   style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginVertical: 15,
                                   }}>
                                   <Text
                                        style={{
                                             fontSize: 15,
                                             fontWeight: 'bold',
                                        }}>
                                        Total Price
                                   </Text>
                                   <Text
                                        style={{
                                             fontSize: 15,
                                             fontWeight: 'bold',
                                        }}>
                                        $50
                                   </Text>
                              </View>
                              <View style={{ marginHorizontal: 30 }}>
                                   <PrimaryButton title="CHECKOUT" />
                              </View>
                         </View>
                    )}
               />
          </SafeAreaView>
     );
};
const style = StyleSheet.create({
     header: {
          paddingVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
     },
     cartCard: {
          height: 119,
          elevation: 15,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
     },
     actionBtn: {
          width: 80,
          height: 30,
          backgroundColor: COLORS.primary,
          borderRadius: 30,
          paddingHorizontal: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
     },
});

export default CartScreen;
