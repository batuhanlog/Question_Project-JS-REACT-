

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)

}

export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
            return data.results.map((dt) => ({
                ...dt,
                answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer]),
            }));
        } else {
            // Handle the case where data.results is not an array
            console.error('Unexpected response format:', data);
            return [];
        }
    } catch (error) {
        // Handle fetch errors
        console.error('Error fetching quiz data:', error);
        return [];
    }
};

