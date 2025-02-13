import React, {useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../assets/card/wallpaper.jpg';


const StartQuizScreen = ({navigation, route}: any) => {
  const {quizData} = route.params;


  const handlePress = () => {
    navigation.navigate('QuestionsScreen', { quizData});
  }
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {/*---------  Header with Image Background --------- */}
      <ImageBackground
        source={img}
        style={styles.topContainer}
        resizeMode="cover">
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePressBack}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
            {quizData.title}
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.leftSection}>
              <Text style={styles.leftHeading}>
                {quizData?.questions?.length || 0}
              </Text>
              <Text style={styles.leftDesc}>Questions</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightHeading}>
                {quizData?.rightAnswerPoints || 0} Points
              </Text>
              <Text style={styles.rightDesc}>Right Answer</Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.leftSection}>
              <Text style={styles.leftHeading}>
                {quizData?.wrongAnswerPoints || 0}
              </Text>
              <Text style={styles.leftDesc}>Wrong Answer</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightHeading}>
                {quizData?.totalTime || '0 min'}
              </Text>
              <Text style={styles.rightDesc}>Total Time</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              {quizData?.description }
            </Text>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handlePress}>
            <Text style={styles.startButtonText}>Start Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 280,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 16,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 16,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#000'
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  rightSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  leftHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  leftDesc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  rightHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  rightDesc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  descriptionContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 8,
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color:'#000'
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 22,
    color: '#777',
  },
  startButton: {
    backgroundColor: '#FF681F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default StartQuizScreen;


