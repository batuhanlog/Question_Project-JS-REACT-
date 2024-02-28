import React, { useEffect, useState } from 'react'
import './Question_Card.css'

const QuestionCard = ({ questionData, handleAnswer, questionNumber }) => {
    const [timer, setTimer] = useState(30);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setTimer(30);
        setShowOptions(false);

        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 1) {
                 
                    if (prevTimer === 20) {
                        setShowOptions(true);
                    }
                    return prevTimer - 1;
                } else {
                    
                    handleAnswer(false);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [questionData, handleAnswer]);

    return (
        <div className='QuestionCard'>
            <div className='QuestionCard-header'>
                <div className='QuestionCard-timer'>Kalan Süre: {timer} sn</div>
                <div className='QuestionCard-number'>Soru {questionNumber}</div>
            </div>
            {questionData?.media && (
                <div className='questionCard-image'>
                    <img src={questionData.media} alt="Soru Görseli" />
                </div>
            )}
            <div className='questionCard-title'>{questionData?.question}</div>
            {showOptions && questionData?.options?.map((option, i) => (
                <button onClick={() => handleAnswer(option === questionData.answer)} key={i}>
                    {option}
                </button>
            ))}
        </div>
    )
}

export default QuestionCard