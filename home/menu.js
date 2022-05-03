

const cardForm = document.getElementById("card-form");
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");
const mainButton = document.getElementById("main-btn");

let saveData;
const getSaveData = async () => {
    try {
        

    } catch {

    }

};

getSaveData();

mainButton.addEventListener("click", () => {
    if (saveData.cards.length === 0 ){
        showAlert("There are no cards, create some to start a session.")
        return;
    }

    location.href = "../session/index.html";
});

cardForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    saveData.cards.push({
        question: questionInput.value,
        answer: answerInput.value,
        canShowAt: null,
        correctCount: 0,
    });

    questionInput.value = "";
    answerInput.value = "";

    showAlert("Card Created!");
})