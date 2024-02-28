import React, { useState } from 'react';
import './Quiz.css';
import QuestionCard from '../../components/question_Card/Question_Card';
import Modal from '../../components/modal/Modal';
import { questions } from '../../data/questions';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // Kullanıcının cevaplarını tutacak yeni state

    const handleAnswer = (isCorrect, userAnswer) => {
        const questionObj = questions[count]; // Şu anki soru objesi
        const correctAnswer = questionObj.answer; // Şu anki sorunun doğru cevabı
    
        // Kullanıcının verdiği cevapları ve doğru cevabı kaydet
        setUserAnswers(prevAnswers => [
            ...prevAnswers,
            { 
                question: questionObj.question, 
                userAnswer, 
                isCorrect,
                correctAnswer // Doğru cevabı ekleyin
            }
        ]);

        if (isCorrect) {
            setScore(score + 100);
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setWrongAnswers(wrongAnswers + 1);
        }
        if (count + 1 < questions.length) {
            setCount(count + 1);
        } else {
            setModal(true);
        }
    };

    return (
        <div className='quiz'>
            {modal ? (
                <Modal
                    score={score}
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                    userAnswers={userAnswers} // Modal'a userAnswers bilgisini geçir
                />
            ) : (
                <QuestionCard
                    questionData={questions[count]}
                    handleAnswer={(isCorrect) => handleAnswer(isCorrect, questions[count].options)} // handleAnswer fonksiyonuna kullanıcının cevabını da geçir
                    questionNumber={count + 1}
                />
            )}
        </div>
    );
};

export default Quiz;
