import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const QuizOverview = ({ route }: any) => {
  const { resultData } = route.params;
  console.log('resultData: ', resultData);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resultData.questionDetails}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>Q. {item.questionText}</Text>
            <Text style={styles.optionheading} >Options</Text>
            {item.options.map((option: string, index: number) => {
              const isUserAnswer = option === item.userAnswer;
              const isCorrectAnswer = option === item.correctAnswer;
              const isSelected = isUserAnswer || isCorrectAnswer;

              return (
                <View key={index} style={styles.optionContainer}>
                 
                  <View
                    style={[
                      styles.radioCircle,
                      isSelected && { backgroundColor: isCorrectAnswer ? "green" : "red", borderColor: isCorrectAnswer ? "green" : "red" },
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
                </View>
              );
            })}

            {/* Result Indicator */}
            <Text style={[styles.resultText, item.isCorrect ? styles.correctText : styles.incorrectText]}>
              {item.isCorrect ? "✅ Correct" : "❌ Incorrect"}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  questionCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginRight: 8,
  },
  optionheading:{
    fontSize: 1,
  },
  optionText: {
    fontSize: 16,
  },
  correctText: {
    color: "green",
    fontWeight: "bold",
  },
  incorrectText: {
    color: "red",
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default QuizOverview;

