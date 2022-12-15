import React from "react";
import Quizz from "./Quizz";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import questions from "./quizzData";
import Home from "../Asset/Home.png";

const QuizzResult =(props)=> {
    return(
        <div className="QuizzResultContainer">
            <div className="QuizzResult" >
            <h1>YOUR GRADING!</h1>
             <p>Score: <span>{props.score
             }</span></p>
             <p>Correct Answer: <span>{props.CorrectAns} / {questions.length}</span></p>
            </div>
            <div className="Arrow">
            <Link to="/">
                <img src={Home} />
            </Link>
            </div>
        </div>
    )
}

export default QuizzResult