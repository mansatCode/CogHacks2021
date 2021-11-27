import React, { useState } from 'react';
import "./Questions.css";

function Questions() {

    const [currentIndex, setCurrentIndex] = useState(4);


    const questions = [
        "Work hands-on with objects, machines, tools, plants, or animals; Work and play outside; Use your physical or athletic abilities",
        "Observe, learn, analyse, evaluate, or solve problems; Question and explore physical, biological, or cultural happenings",
        "Express yourself creatively; Use imagination or intuition; Feel free to be inventive without limits",
        "Inform, enlighten, help, teach, counsel, or cure people; Use your skills with words to serve people",
        "Influence, persuade, lead, or manage; Reach your personal or organisational goals"
    ];

    const showLastQuestion = () => {
        if (currentIndex == 0) {
            return;
        }
        setCurrentIndex(currentIndex-1)
    }
    
    const showNextQuestion = () => {
        if (currentIndex == 4) {
            return;
        }
        setCurrentIndex(currentIndex+1)
    }

    const getPreviousButtonText = () => {
        if (currentIndex == 0) {
            return "Exit";
        }
        return "Previous Question";
    }

    const getNextButtonText = () => {
        if (currentIndex == 4) {
            return "Submit";
        }
        return "Next Question";
    }

    
    return (

        <div class="container">
            <h1>Insert Logo Here</h1>
            <progress id="progress_bar" value="0" max="100"></progress>
            <h3>{currentIndex+1}/5</h3>
            <h2>{questions[currentIndex]}</h2>
            <form method="post">
                <input id="ans_1" input type="radio" name="carrier" value="ans_one" /> Strongly Agree
                <input id="ans_2" input type="radio" name="carrier" value="ans_two" /> Agree
                <input id="ans_3" input type="radio" name="carrier" value="ans_three" /> Neutral
                <input id="ans_4" input type="radio" name="carrier" value="ans_four" /> Disagree
                <input id="ans_5" input type="radio" name="carrier" value="ans_five" /> Strongly Disagree
            </form>
            <button type ="button" onClick={() => showLastQuestion()}>{getPreviousButtonText()}</button>
            <button type ="button" onClick={() => showNextQuestion()}>{getNextButtonText()}</button>
        </div>
    )
}

export default Questions;