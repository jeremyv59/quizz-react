// Function check if it's true or false
export const checkBooleanAnswer = (value) => {
  if (value === "True") {
    return "Vrai";
  } else if (value === "False") {
    return "Faux";
  } else {
    return value;
  }
};

// Function to getAnswers in the same array and sorted
export const getAnswers = (contextData) => {
  let arrayIncorrectAnswers = [];
  let finalArr = [];

  if (contextData.length > 0) {
    contextData.forEach((question) => {
      arrayIncorrectAnswers = question.incorrect_answers;
      arrayIncorrectAnswers.push(question.correct_answer);
      arrayIncorrectAnswers.sort(() => Math.random() - 0.5);
      finalArr.push(arrayIncorrectAnswers);
    });
  }
  return finalArr;
};
