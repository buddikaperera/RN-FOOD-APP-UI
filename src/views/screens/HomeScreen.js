import React, { useState } from 'react';
import {
     Dimensions,
     Image,
     SafeAreaView,
     StyleSheet,
     Text,
     View,
} from 'react-native';
import {
     FlatList,
     ScrollView,
     TextInput,
     TouchableHighlight,
     TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import Header from '../components/Header';
import SearchBar from '../components/HomePage/SearchBar';
import CategoryList from '../components/HomePage/CategoryList';
import ListCategories from '../../views/components/HomePage/CategoryList';
import Card from '../components/HomePage/Card';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
     const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <Header />
               <SearchBar />
               <View>
                    <ListCategories
                         selectedCategoryIndex={selectedCategoryIndex}
                         setSelectedCategoryIndex={setSelectedCategoryIndex}
                    />
               </View>
               {/*Flat list*/}

               <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={foods}
                    renderItem={({ item }) => <Card food={item} />}
               />

               {/*Flat list*/}
          </SafeAreaView>
     );
};

const style = StyleSheet.create({
     header: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
     },
     inputContainer: {
          flex: 1,
          height: 50,
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: COLORS.light,
          alignItems: 'center',
          paddingHorizontal: 20,
     },
     sortBtn: {
          width: 50,
          height: 50,
          marginLeft: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
     },
});

export default HomeScreen;
