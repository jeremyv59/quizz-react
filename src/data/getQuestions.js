import axios from "axios";

const API_ENDPOINT = "https://opentdb.com/api.php?";

export function getQuestions(number, category, difficulty, setLoading) {
    try {
        setLoading(true);
        const response = await axios(`${API_ENDPOINT}amount=${number}&difficulty=${difficulty}&category=${category}`);
        console.log('response', response.data);
    } catch(e){
        e.message('Erreur de chargement des données')
    }
}
