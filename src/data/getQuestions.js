import axios from "axios";

const API_ENDPOINT = "https://opentdb.com/api.php?";

export async function getQuestions(number, category, difficulty) {
  console.log("categoryyy", category, number, difficulty);
  try {
    // setLoading(true);
    const response = await axios(
      `${API_ENDPOINT}amount=${number}&difficulty=${difficulty}&category=${category}`
    );
    return response;
  } catch (e) {
    alert("Error de chargement des questions");
  }
}
