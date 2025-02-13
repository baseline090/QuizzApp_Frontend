import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { categoriesData } from '../data/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const  CategoriesScreen = ({ navigation }: { navigation: any }) => {

  const handleCategorySelect = async (categoryName: string) => {
    
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('token: ', token);
      if (!token) {
        Alert.alert('No token found. Please log in again.');
        return;
      }

      const response = await axios.get(
        `https://quizz3.onrender.com/api/user/category/${categoryName}`,
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      if (response.data.length > 0) {
        navigation.navigate('QuestionsScreen', {quizzes: response.data});
      } else {
        Alert.alert('No quizzes found for this category.');
      }
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      Alert.alert('Error fetching quizzes for the selected category');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.categoryList}>
        <View style={styles.row}>
          {categoriesData.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => handleCategorySelect(category.name)}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  categoryList: {
    padding: 15,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 5,
      },
    }),
    marginBottom: 15,
    alignItems: 'center',
    width: '48%',
    paddingVertical: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '700',
    color:'#000'
  },
});

export default CategoriesScreen;

