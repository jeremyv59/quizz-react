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

// Fctn to encode question title 
// export const encodeToUTF16 = (message) => {
//   // On procède octet par octet
//   return message
//     .split("")
//     .map((char) => {
//       // Pour chaque octet, on récupère sont point de code
//       const word = char.codePointAt(0).toString(16);

//       // Si le point de code ne fait qu'un seul octet, on ajoute des 0
//       // Ceci permet d'obtenir la longueur fixe de l'UTF-16
//       if (word.length === 2) return `00${word}`;
//       return word;
//     })
//     .join("");
// };

// Fctn to clean question (replace &quot;/)
export const cleanQuestionTitle = (questionTitle) => {
  let finalText = "";
  finalText = questionTitle.replace(/&quot;/g, '\\"');
  return finalText;
};
