function main() {
    eventHandlers()
    render()
}


function eventHandlers() {
    $("body").on("click", ".startButton", e => {
        STORE.page = ".question"
        // STORE.currentQuestion = 1
        render()
    })
    $("body").on("submit", ".form", e => {
        e.preventDefault()
        STORE.page = ".response"
        render()
        e.target.reset()
    })
    $("body").on("click", ".nextQuestion", e => {
        STORE.currentQuestion++
        if (STORE.currentQuestion < STORE.questions.length) {
            STORE.page = ".question"
        } else {
            STORE.page = ".final"
        }
        render()
    })
    $("body").on("click", ".restartButton", e => {
        STORE.page = ".startQuiz"
        STORE.currentQuestion = 0
        STORE.score = 0
        render()
    })
}

// STORE[questionIndex].answers.forEach (function (answerValue,answerIndex) {
//     $(`<label class="questionCount" for="${answerIndex}">
//     `)
// })

function render() {
    $("main section").hide()
    $(STORE.page).show()
    $(".score").html(STORE.score)
    // $(".questionCount").html(displayCount) 
    if (STORE.page == ".question") {
        const question = STORE.questions[STORE.currentQuestion]
        let displayCount = STORE.currentQuestion + 1;
        $(".questionText").html(question.title)
        $("#label1").html(question.answers[0])
        $("#label2").html(question.answers[1])
        $("#label3").html(question.answers[2])
        $("#label4").html(question.answers[3]);
        $(".questionCount").html(displayCount)
    } else if (STORE.page == ".response") {
        const answer = $("input:checked").val()
        const question = STORE.questions[STORE.currentQuestion]
        if (question.correctAnswer == answer) {
            STORE.score++
            $("#responseText").html("This answer is correct.")
        } else {
            $("#responseText").html("This answer is incorrect.")
        }
    } else if (STORE.page == ".final"){
       $(".score").html(STORE.score)
    } else {
        $(".questionCount").html(STORE.currentQuestion) 
    }
}
    $(main)     
