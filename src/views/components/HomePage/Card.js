import {
     StyleSheet,
     Text,
     View,
     Image,
     Dimensions,
     TouchableHighlight,
} from 'react-native';
import React from 'react';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Card = ({ food, navigation }) => {
     return (
          <TouchableHighlight
               onPress={() => navigation.navigate('DetailsScreen', food)}
               underlayColor={COLORS.white}
               activeOpacity={0.9}>
               <View style={styles.card}>
                    <View style={{ alignItems: 'center', top: -40 }}>
                         <Image
                              source={food.image}
                              style={{ height: 120, width: 120 }}
                         />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                         <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                              {food.name}
                         </Text>
                         <Text
                              style={{
                                   fontSize: 10,
                                   color: COLORS.grey,
                                   marginTop: 2,
                              }}>
                              {food.ingredients}
                         </Text>
                    </View>
                    <View
                         style={{
                              marginTop: 5,
                              marginHorizontal: 20,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                         }}>
                         <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                              ${food.price}
                         </Text>
                         <View style={styles.addToCartBtn}>
                              <Icon name="add" size={20} color={COLORS.white} />
                         </View>
                    </View>
               </View>
          </TouchableHighlight>
     );
};

export default Card;

const styles = StyleSheet.create({
     card: {
          height: 220,
          width: cardWidth,
          marginHorizontal: 10,
          marginBottom: 20,
          marginTop: 50,
          borderRadius: 15,
          elevation: 13, //shadow
          backgroundColor: COLORS.white,
     },
     addToCartBtn: {
          height: 30,
          width: 30,
          borderRadius: 20,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
     },
});
