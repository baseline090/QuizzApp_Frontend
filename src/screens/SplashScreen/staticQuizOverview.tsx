import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { erectionData } from '../../data/questionData';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StaticQuizOverview = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  console.log('selectedAnswers: ', selectedAnswers);

  const handleSelectAnswer = (questionId: string, option: string) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: option,
    }));
  };

  const isAnswerCorrect = (questionId: string, selectedOption: string) => {
    const correctAnswer = erectionData.find(q => q.id === questionId)?.correctAnswer;
    return selectedOption === correctAnswer;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={erectionData}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.questionText}>{item.questionText}</Text>
            <Text style={styles.optionHeading}>Options</Text>

            {item.options.map((option, index) => {
              const isUserAnswer = selectedAnswers[item.id] === option;
              const isCorrectAnswer = isAnswerCorrect(item.id, option);
              const isSelected = isUserAnswer || isCorrectAnswer;

              return (
                <TouchableOpacity
                  key={index}
                  style={styles.optionContainer}
                  onPress={() => handleSelectAnswer(item.id, option)}
                  activeOpacity={0.6}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      isSelected && {
                        backgroundColor: isCorrectAnswer ? 'green' : 'red',
                        borderColor: isCorrectAnswer ? 'green' : 'red',
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.optionText,
                      isCorrectAnswer && styles.correctText,
                      isUserAnswer && !isCorrectAnswer && styles.incorrectText,
                    ]}
                  >
                    {option}
                  </Text>

                  {isUserAnswer && (
                    <Icon
                      name={isCorrectAnswer ? 'check-circle' : 'cancel'}
                      size={20}
                      color={isCorrectAnswer ? 'green' : 'red'}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              );
            })}

            {/* Result Indicator */}
            {selectedAnswers[item.id] && (
              <Text
                style={[
                  styles.resultText,
                  isAnswerCorrect(item.id, selectedAnswers[item.id]) ? styles.correctText : styles.incorrectText,
                ]}
              >
                {isAnswerCorrect(item.id, selectedAnswers[item.id]) ? '✅ Correct' : '❌ Incorrect'}
              </Text>
            )}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal:20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  optionHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  correctText: {
    color: 'green',
    fontWeight: 'bold',
  },
  incorrectText: {
    color: 'red',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default StaticQuizOverview;
